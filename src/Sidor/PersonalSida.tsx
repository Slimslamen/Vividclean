import React, { useEffect, useState } from "react";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import { Ibooking, UserAuthContextProps } from "../types/types";
import UserAuthContext from "../UserAuthContext";

export default function PersonalSida(): JSX.Element {
  const [cleaner, setCleaner] = useState<Ibooking[]>([]);
  const [admin, setAdmin] = useState<string>("");

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

        const usernameSnap = await getDoc(getUsername);
        const adminUser = usernameSnap.data()?.username;

        setAdmin(adminUser);

        const filteredBookings: Ibooking[] = bookingsRef.docs
          .filter((doc) => doc.data().cleaner === adminUser)
          .map((doc) => ({
            ...doc.data(),
            id: doc.id,
            date: doc.data().date.toDate(),
          }));
        setCleaner(filteredBookings);
      } catch (error) {
        console.error("Error fetching bookings:", error);
      }
    };

    fetchBookings();
  }, []);

  return (
    <>
      <h1 className="font-DM text-5xl flex items-center justify-center mt-16 border-b border-grey">
        Personal: {admin}
      </h1>

      <div className="flex md:flex-cols-2 md:gap-4">
        <div className="w-full h-96 mt-10 mb-10">
          <h2 className="font-DM text-xl flex items-center justify-center border-b border-black ml-4 mb-4">
            Dina kommande arbetspass
          </h2>
          <ul>
            {cleaner?.map((booking) => (
              <li className="m-5 border-b border-black" key={booking.id}>
                Datum: {booking.date.toLocaleDateString()}, Tid: {booking.time}
                <button className="m-5 ml-48 border border-solid text-white bg-customDark p-1 rounded-lg">
                  städning utförd
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full h-96 mt-10 ml-[5%]">
          <h2 className="font-DM text-xl flex items-center justify-center border-b border-black mr-4 mb-4">
            Dina utförda arbetspass
          </h2>
        </div>
      </div>
    </>
  );
}
