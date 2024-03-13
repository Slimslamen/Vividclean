import React, { useEffect, useState } from "react";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs, doc, getDoc, updateDoc } from "firebase/firestore";
import { Ibooking, UserAuthContextProps } from "../types/types";
import UserAuthContext from "../UserAuthContext";
import BookingAdminList from "./components/BookingAdminList";
import DoneAdminBookings from "./components/DoneAdminBookings";
import { db } from "../config/firebase";

export default function PersonalSida(): JSX.Element {
  const [cleaner, setCleaner] = useState<Ibooking[]>([]);
  const [admin, setAdmin] = useState<string>("");

  const { emailAdmin } = React.useContext(
    UserAuthContext
  ) as UserAuthContextProps;


  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const bookingsRef = await getDocs(collection(db, "users", emailAdmin, "booking"));

        const getUsername = doc(db, "users", emailAdmin);
        const usernameSnap = await getDoc(getUsername);
        const adminUser = usernameSnap.data()?.username;
        setAdmin(adminUser);

        const filteredBookings: Ibooking[] = bookingsRef.docs
          .filter((doc) => doc.data().cleaner === adminUser)
          .map((doc) => ({
            ...doc.data(),
            id: doc.id,
            date: doc.data().date.toDate(),
            status: doc.data().status
          }));
        setCleaner(filteredBookings);

      } catch (error) {
        console.error("Error fetching bookings:", error);
      }
    };

    fetchBookings();
  }, []);

 async function handleDoneBooking(id:string) {
      setCleaner(prev => prev.map(book => book.id === id ? {...book, status: !book.status}: book))
      //lägg till updateDocs
  }
  
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
              {cleaner?.map((booking) => (
                !booking.status && (
                <div
                  key={booking.id}
                  className="m-5 border-b border-black bg-customDark text-white font-DM p-5 rounded-lg flex flex-row items-center justify-between"
                >
                  <BookingAdminList key={booking.id} booking={booking} />
                  <div className="flex items-center me-4">
                    <input
                      id="green-checkbox"
                      type="checkbox"
                      checked={booking.status}
                      onChange={() => handleDoneBooking(booking.id)}
                      className="size-5 rounded-lg dark:ring-offset-gray-300 focus:ring-1 dark:bg-gray-700 dark:border-gray-600"
                    />
                  </div>
                </div>
                )
              ))}
            </ul>
        </div>
        
          <div className="w-full h-96 mt-10 ml-[5%]">
            <h2 className="font-DM text-2xl flex items-center justify-center border-b border-black mr-4 mb-4">
              Dina utförda arbetspass
            </h2>
            <ul className="flex flex-col">
              {cleaner?.map((booking) => (
                booking.status && (
                <div
                  key={booking.id}
                  className="m-5 border-b border-black bg-customDark text-white font-DM p-5 rounded-lg flex flex-row items-center justify-between"
                >
                  <DoneAdminBookings key={booking.id} booking={booking} />
                </div>
                )
              ))}
            </ul>
          </div>
        
      </div>
    </div>
  );
}
