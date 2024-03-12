import React, { useEffect, useState } from "react";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import { Ibooking, UserAuthContextProps } from "../types/types";
import UserAuthContext from "../UserAuthContext";

export default function PersonalSida(): JSX.Element {
  const [cleanerBookings, setCleanerBookings] = useState<Ibooking[]>([]);

  const { emailAdmin } = React.useContext(
    UserAuthContext
  ) as UserAuthContextProps;

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const firestore = getFirestore();
        const bookingsRef = await getDocs(
          collection(firestore, "users", emailAdmin, "booking")
        );
        const getUsername = doc(firestore, "users", emailAdmin);

        const usernameSap = await getDoc(getUsername);
        const adminUser = usernameSap.data()?.username;
        console.log(adminUser);

        const filteredBookings: Ibooking[] = bookingsRef.docs
          .filter((doc) => doc.data().cleaner === adminUser)
          .map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }));

        // setCleanerBookings(filteredBookings)
      } catch (error) {
        console.error("Error fetching bookings:", error);
      }
    };

    fetchBookings();
  }, []);

  return (
    <>
      <h1 className="font-DM text-5xl flex items-center justify-center mt-16 border-b border-grey">
        Personal
      </h1>
      <div className="flex md:flex-cols-2 md:gap-4">
        <div className="w-full h-96 mt-10 mb-10">
          <h2 className="font-DM text-xl flex items-center justify-center border-b border-black mb-4">
            Dina kommande arbetspass
          </h2>
          <ul>
            {cleanerBookings.map((booking) => (
              <li key={booking.id}>
                Datum: {booking.date}, Tid: {booking.time}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full h-96 mt-10 ml-[5%]">
          <h2 className="font-DM text-xl flex items-center justify-center border-b border-black mb-4">
            Dina utförda arbetspass
          </h2>
        </div>
      </div>
    </>
  );
}
