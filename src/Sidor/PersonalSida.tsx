import React, { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  getDoc,
  doc,
  writeBatch,
} from "firebase/firestore";
import { Ibooking, UserAuthContextProps } from "../types/types";
import UserAuthContext from "../UserAuthContext";
import BookingAdminList from "./components/BookingAdminList";
import DoneAdminBookings from "./components/DoneAdminBookings";
import { db } from "../config/firebase";

export default function PersonalSida(): JSX.Element {
  const [cleaner, setCleaner] = useState<Ibooking[]>([]);
  const [admin, setAdmin] = useState<string>("");
  const [cachedBookings, setCachedBookings] = useState<
    Record<string, Ibooking[]>
  >({});

  const { emailAdmin, emailLogin } = React.useContext(
    UserAuthContext
  ) as UserAuthContextProps;

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        if (cachedBookings[emailAdmin]?.length) {
          // Använd cache om bokningarna redan finns hämtade
          setCleaner(cachedBookings[emailAdmin]);
          return;
        }

        // Annars hämta bokningar från databasen
        const userDocRef = doc(db, "users", emailAdmin);
        const bookingsRef = collection(db, "users", emailAdmin, "booking");
        const userDocSnap = await getDoc(userDocRef);
        const adminUser = userDocSnap.data()?.username;
        setAdmin(adminUser);

        const querySnapshot = await getDocs(bookingsRef);

        const bookingsData: Ibooking[] = querySnapshot.docs.map((doc) => ({
          ...(doc.data() as Ibooking),
          id: doc.id,
          date: doc.data().date.toDate(),
        }));

        const filteredBookings = bookingsData.filter(
          (booking) => booking.cleaner === adminUser
        );
        const newBookings = filteredBookings.sort(
          (a, b) => a.date.getTime() - b.date.getTime()
        );
        setCleaner(newBookings);

        setCachedBookings((prev) => ({
          ...prev,
          [emailAdmin]: newBookings,
        }));
      } catch (error) {
        console.error("Error fetching bookings:", error);
      }
    };

    fetchBookings();
  }, [emailAdmin]);

  const handleDoneBooking = async (id: string) => {
    try {
      const batch = writeBatch(db);
      const adminBookingRef = doc(db, "users", emailAdmin, "booking", id);
      const customerBookingRef = doc(db, "users", emailLogin, "booking", id);
      batch.update(adminBookingRef, { status: true });
      batch.update(customerBookingRef, { status: true });

      await batch.commit();

      setCleaner((prev) =>
        prev.map((book) => (book.id === id ? { ...book, status: true } : book))
      );
    } catch (error) {
      console.error("Error updating booking:", error);
    }
  };

  return (
    <div className="p-10 bg-customHover h-auto">
      <h1 className="font-DM text-5xl flex items-center justify-center mt-16 border-b border-grey">
        {admin}
      </h1>
      <hr className="bg-black" />

      <div className="flex md:flex-cols-2 md:gap-4">
        <div className="w-full h-auto mt-10 mb-10">
          <h2 className="font-DM text-2xl flex items-center justify-center border-b border-black ml-4 mb-">
            Dina kommande arbetspass
          </h2>
          <ul className="flex flex-col">
            {cleaner?.map(
              (booking) =>
                !booking.status && (
                  <div
                    key={booking.id}
                    className="m-5 border-b border-black bg-customDark text-white font-DM p-5 rounded-lg flex flex-row items-center justify-between"
                  >
                    <BookingAdminList key={booking.id} booking={booking} />
                    <div className="flex items-center me-4">
                      <input
                        id="checkbox"
                        type="checkbox"
                        checked={booking.status}
                        onChange={() => handleDoneBooking(booking.id)}
                        className="size-5 rounded-lg dark:ring-offset-gray-300 focus:ring-1 dark:bg-gray-700 dark:border-gray-600"
                      />
                    </div>
                  </div>
                )
            )}
          </ul>
        </div>

        <div className="w-full h-auto mt-10 ml-[5%]">
          <h2 className="font-DM text-2xl flex items-center justify-center border-b border-black mr-4 mb-4">
            Dina utförda arbetspass
          </h2>
          <ul className="flex flex-col font-DM">
            {cleaner?.map(
              (booking) =>
                booking.status && (
                  <div
                    key={booking.id}
                    className="m-5 border-b border-black bg-customDark text-white font-DM p-5 rounded-lg flex flex-row items-center justify-between"
                  >
                    <DoneAdminBookings key={booking.id} booking={booking} />
                  </div>
                )
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
