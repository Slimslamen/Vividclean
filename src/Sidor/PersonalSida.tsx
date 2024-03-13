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
    <div className="p-10 bg-customHover">
      <h1 className="font-DM text-5xl flex items-center justify-center mt-16 border-b border-grey">
        {admin}
      </h1>
      <hr className="bg-black"/>

      <div className="flex md:flex-cols-2 md:gap-4">
        <div className="w-full h-96 mt-10 mb-10">
          <h2 className="font-DM text-2xl flex items-center justify-center border-b border-black ml-4 mb-">
            Dina kommande arbetspass
          </h2>
          <ul className="flex flex-col">
            {cleaner?.map((booking) => (
              <div key={booking.id} className="m-5 border-b border-black bg-customDark text-white font-DM p-5 rounded-lg flex flex-row items-center justify-between">
                <div className="flex flex-row space-x-4">
                  <li>
                    Datum: {booking.date.toLocaleDateString()}  
                  </li>
                  <li>
                    Tid: {booking.time}
                  </li>
                  <li>
                    Tjänst: {booking.service}
                  </li>
                </div>
                <button className=" border border-solid text-white bg-customDark p-1 rounded-lg">
                  Pågående
                </button>
              </div>
            ))}
          </ul>
        </div>
        <div className="w-full h-96 mt-10 ml-[5%]">
          <h2 className="font-DM text-2xl flex items-center justify-center border-b border-black mr-4 mb-4">
            Dina utförda arbetspass
          </h2>
        </div>
      </div>
    </div>
  );
}
