import React, { FormEvent, useEffect, useState } from "react";
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

  const [admin, setAdmin] = useState<string>("");
  const [cachedBookings, setCachedBookings] = useState<
    Record<string, Ibooking[]>
  >({});
  const [showBookings, setShowBookings] = useState<boolean>(true);

  const { emailAdmin, bookingId, cleaner, setCleaner, setBookings, emailLogin } = React.useContext(
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

        const bookingsData: Ibooking[] = querySnapshot.docs.map((doc) => {
          const data = doc.data();
          return {
            ...(data as Ibooking),
            id: doc.id,
            date: data.date ? data.date.toDate() : new Date(),
          };
        });

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
  }, [emailAdmin, bookingId]);

  const handleDoneBooking = async (customerEmail: string, bookingId: string ) => {
    try {
      if (!customerEmail) {
        console.error("Customer email is undefined");
        return;
      }

      const batch = writeBatch(db);
       console.log("Admin", emailAdmin); 

      const adminBookingRef = doc(db, "users", emailAdmin, "booking", bookingId);
      const customerBookingRef = doc(
        db,
        "users",
        (customerEmail || emailLogin),
        "booking",
        bookingId
      );
       console.log("Admin booking reference path:", adminBookingRef.path);
      console.log("Admin ID:", adminBookingRef.id); 

      batch.update(adminBookingRef, { status: true });
      batch.update(customerBookingRef, { status: true });
       console.log("Value of emailLogin:", customerEmail); 
    
       console.log("Customer booking reference path:", customerBookingRef.path);
      console.log("customer ID:", bookingId); 

   

      await batch.commit();

      setCleaner((prevBookings) =>
        prevBookings.map((booking) =>
          booking.id === bookingId ? { ...booking, status: true } : booking
        )
        );
        setBookings((prevBookings) =>
        prevBookings.map((booking) =>
          booking.id === bookingId ? { ...booking, status: true } : booking
        ))
    } catch (error) {
      console.error("Error updating booking:", error);
    }
  };




  return (
    <div className="p-10 h-auto">
      <h1 className="font-semibold tracking-wide font-DM text-5xl text-center mt-8 mb-4">{`${admin}s schema`}</h1>

      <div className="grid grid-cols-1 gap-6 mt-8">
        <div className="border rounded-lg">
          <h2
            onMouseOver={() => setShowBookings(true)}
            className=" text-customDark  hover:text-customDark-800 hover:font-bold cursor-pointer font-medium tracking-wide font-DM text-3xl text-center py-6 border-b border-gray-200"
          >
            Dina kommande arbetspass
          </h2>
          <ul className="flex flex-wrap p-0">
            {showBookings &&
              cleaner?.map(
                (booking) =>
                  !booking.status && (
                    <li
                      key={booking.id}
                      className="m-4 border rounded-lg shadow-md bg-white"
                    >
                      <div className="p-4">
                        <BookingAdminList booking={booking} />
                        <div className="flex items-center mt-2">
                          <input
                            id={booking.bookingId}
                            type="checkbox"
                            checked={booking.status}
                            onChange={(event) => {
                              event.preventDefault();
                              handleDoneBooking(booking.customerEmail, booking.bookingId);
                            }}
                            className="size-5 rounded-lg dark:ring-offset-gray-300 focus:ring-1 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label htmlFor={booking.bookingId} className="ml-2">
                            Markera som utförd
                          </label>
                        </div>
                      </div>
                    </li>
                  )
              )}
          </ul>
        </div>

        <div className="border rounded-lg mt-6">
          <h2
            onMouseOver={() => setShowBookings(false)}
            className="text-customDark hover:text-customDark-800 hover:font-bold cursor-pointer font-medium tracking-wide font-DM text-3xl text-center py-6 border-b border-gray-200"
          >
            Dina utförda arbetspass
          </h2>
          <ul className="flex flex-wrap p-0">
            {!showBookings &&
              cleaner?.map(
                (booking) =>
                  booking.status && (
                    <li
                      key={booking.id}
                      className="m-4 border rounded-lg shadow-md bg-white"
                    >
                      <div className="p-4">
                        <DoneAdminBookings booking={booking} />
                        <div className="flex items-center">
                          <input
                            id={booking.id}
                            type="checkbox"
                            checked={booking.status}
                            onChange={() => handleDoneBooking(booking.id, booking.customerEmail)}
                            className="size-5 rounded-lg dark:ring-offset-gray-300 focus:ring-1 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label htmlFor={booking.id} className="ml-2">
                            Utförd
                          </label>
                        </div>
                      </div>
                    </li>
                  )
              )}
          </ul>
        </div>
      </div>
    </div>
  );
}
