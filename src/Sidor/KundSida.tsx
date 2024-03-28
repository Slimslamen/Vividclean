import DatePicker from "react-datepicker";
import React, { FormEvent, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Services from "./components/Services";
import {
  Ioptions,
  Icleaners,
  Ibooking,
  UserAuthContextProps,
} from "../types/types";
import { db } from "../config/firebase";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  setDoc,
} from "firebase/firestore";
import BookingPage from "./components/BookingPage";
import UserAuthContext from "../UserAuthContext";
import { DoneBookings } from "./components/DoneBookings";

const options: Ioptions[] = [
  {
    id: 0,
    service: "Basic",
    type: "Basic-checkbox-list",
  },
  {
    id: 1,
    service: "Fönsterputs",
    type: "Fönsterputs-checkbox-list",
  },
  {
    id: 2,
    service: "Diamanttvätt",
    type: "Diamanttvätt-checkbox-list",
  },
  {
    id: 3,
    service: "Flyttstädning",
    type: "Flyttstädning-checkbox-list",
  },
  {
    id: 4,
    service: "Toppstädning",
    type: "Toppstädning-checkbox-list",
  },
];

export default function KundSida(): JSX.Element {
  const {
    name,
    emailLogin,
    martaRef,
    EstelleRef,
    JimmyRef,
    formData,
    setFormData,
    setBookingId,
    cleaner,
    bookings,
    setBookings,
  } = React.useContext(UserAuthContext)! as UserAuthContextProps;

  // useEffect ställer in selectedName till name så att den hinner sätta name på första bokningen
  useEffect(() => {
    setFormData(prev => ({...prev, selectedName: name}));
  }, []);

  const placeHolderDates = new Date().toLocaleDateString();
  //State to handle the form data

  //state with all the bookings

  const [reRender, setReRender] = useState<boolean>(false);

  const bookingsRef = collection(db, "users", emailLogin, "booking");


  const getBookings = async () => {
    try {
      //getting bookings on the logged in user
      const data = await getDocs(bookingsRef);
      //mapping over info of the booking
      const filteredData: Ibooking[] = data.docs.map((doc) => ({
        id: doc.id,
        name: doc.data().name,
        date: doc.data().date,
        cleaner: doc.data().cleaner,
        time: doc.data().time,
        status: doc.data().status,
        service: doc.data().service,
        customerEmail: doc.data().customerEmail,
      }));
      //setting the mapped info in bookings
  
      setBookings(filteredData);
    } catch (error) {
      console.log(error);
    }
  };
  
  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const {
      selectedName,
      selectedDate,
      time,
      cleaner,
      service,
      status,
      customerEmail,
    } = formData;
    //add formdata to selected booking
    const bookingData = {
      name: selectedName,
      date: selectedDate,
      time: time,
      cleaner: cleaner,
      service: service,
      status: status,
      customerEmail: emailLogin,
    };
    try {
    
      console.log("Customer email:", customerEmail);
    // fetching booking
    const docRef = await doc(bookingsRef);
    // setting id of booking on a variabel
    const newBookingId = docRef.id
    // adding the saved id to the booking
    const newBookingRef = doc(bookingsRef, newBookingId);
    await setDoc(newBookingRef, bookingData);
    // setting id in a new variable
    setBookingId(newBookingId);
    
    // adding the booking to the selected cleaner
    if (cleaner === "Estelle") {
      const estelleBookingRef = doc(EstelleRef, newBookingId);
      await setDoc(estelleBookingRef, bookingData);
    }
    if (cleaner === "Märta") {
      const martaBookingRef = doc(martaRef, newBookingId);
      await setDoc(martaBookingRef, bookingData);
    }
    if (cleaner === "Jimmy") {
      const jimmyBookingRef = doc(JimmyRef, newBookingId);
      await setDoc(jimmyBookingRef, bookingData);
    }
    
      //get bookings
      getBookings();
      //set inputs to default
      setFormData({
        selectedName: name,
        selectedDate: "",
        time: "",
        cleaner: cleaners[0].name,
        service: "",
        status: false,
        customerEmail: emailLogin,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const deleteBooking = async (id: string) => {
    //detelte booking based on selected id
    const bookingDoc = doc(db, "users", emailLogin, "booking", id);
    const estelleBookingRef = doc(EstelleRef, id);
    const martaBookingRef = doc(martaRef, id);
    const jimmyBookingRef = doc(JimmyRef, id);

    if (bookingDoc.id === estelleBookingRef.id || martaBookingRef.id || jimmyBookingRef.id) {
      await deleteDoc(bookingDoc);
      await deleteDoc(estelleBookingRef)
      await deleteDoc(martaBookingRef)
      await deleteDoc(jimmyBookingRef)
    }

    //changing state from true to false or other way around
    setReRender(!reRender);
  };

  //updating the fetched booking after each time we delete a booking
  useEffect(() => {
    getBookings();
  }, [reRender]);


  const cleaners: Icleaners[] = [
    {
      id: uuidv4(),
      value: "Städare",
      name: "Städare",
    },
    {
      id: uuidv4(),
      value: "Estelle",
      name: "Estelle",
    },
    {
      id: uuidv4(),
      value: "Märta",
      name: "Märta",
    },
    {
      id: uuidv4(),
      value: "Jimmy",
      name: "Jimmy",
    },
  ];

  return (
    <>
      <div className="mx-auto md:w-4/5 my-10 flex items-start justify-center flex-col md:flex-row space-y-10 rounded-md space-x-10">
        <div className="md:ml-0 ml-5 flex md:block items-center justify-center flex-col w-11/12 md:w-1/3">
            <div className="text-center my-4 bg-customDark text-white p-4 rounded-lg">
              <h1 className="text-4xl font-DM">{`${name}s`} bokningar</h1>
            </div>
          <div className="bg-customBeige rounded-lg">
          <form
            className="flex items-center justify-center flex-col space-y-4 p-5"
            onSubmit={onSubmit}
          >
            <h2 className="text-4xl font-DM mb-5">Boka städning</h2>
            <div className="flex flex-col w-full space-y-5">
              <div className="w-full flex flex-col items-center">
                <p className="font-DM">Välj Datum</p>
                <DatePicker
                  onChange={(date: Date) =>
                    setFormData((prev) => ({ ...prev, selectedDate: date }))
                  }
                  placeholderText={placeHolderDates}
                  filterDate={(date) => {
                    return date.getDay() !== 0 && date.getDay() !== 6;
                  }}
                  /* Disable weekends (Saturday and Sunday) */ minDate={
                    new Date()
                  }
                  selected={formData.selectedDate}
                  required
                />
              </div>
              <div className="w-full flex flex-col items-center">
                <p className="font-DM">Välj tid</p>
                <input
                  required
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, time: e.target.value }))
                  }
                  value={formData.time}
                  id="time"
                  type="time"
                  min="08:00"
                  max="15:00"
                  step="3600"
                  className="p-1 rounded-lg w-1/2"
                />
              </div>
            </div>
            <div className="flex flex-col w-52 items-center justify-center">
              <p className="font-DM">Välj städare</p>
              <select
                required
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    cleaner: e.target.value,
                  }))
                }
                value={formData.cleaner}
                name="Städare"
                className="p-1 rounded-lg w-1/2 bg-transparent focus:outline-none"
              >
                {cleaners.map((clean) => (
                  <option key={clean.id} value={clean.value}>
                    {clean.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="w-3/4 flex flex-col space-y-4 border border-customHover shadow-sm rounded-lg">
              <p className="font-DM text-center p-2 mb-[-20px]">Välj tjänst</p>
              <ul className="flex flex-col mt-2 items-center w-full text-sm font-medium text-gray-900  rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                {options.map((option) => (
                  <Services
                    key={option.id}
                    option={option}
                    formService={formData.service}
                    setFormData={setFormData}
                  />
                ))}
              </ul>
            </div>
            <button
              type="submit"
              className="cursor-pointer bg-customDark text-white px-32 py-2 rounded-md hover:bg-customHoverDark duration-300 ease-in-out disabled:opacity-30 disabled:hover:bg-customDark disabled:cursor-auto"
           >
              Boka nu
            </button>
          </form>
          </div>
        </div>
        <div>
          <div className="space-y-5">
            <h2 className="text-4xl my-2 font-DM text-center px-5 rounded-lg py-2 font-bold">Kommande bokningar</h2>
            {bookings?.map(
              (booking) =>
                !booking.status && (
                  <div key={booking.id} className="flex flex-row w-full">
                    <BookingPage booking={booking} />
                    <button
                      onClick={() => deleteBooking(booking.id)}
                      className="ml-2 bg-customHoverDark rounded-lg hover:bg-customDark text-white duration-300 ease-in-out p-1 font-DM"
                    >
                      Ta bort bokning
                    </button>
                  </div>
                )
            )}
          </div>
          <div className="mt-5">
            <h2 className="text-4xl my-2 font-DM text-center px-5 rounded-lg py-2 font-bold">Utförda bokningar</h2>
            <ul className="flex flex-col font-DM space-y-1">
              {cleaner?.map(
                (booking) =>
                  booking.status && (
                    <div
                      key={booking.id}
                      className="m-5 border-b border-black bg-customDark text-white font-DM p-5 rounded-lg"
                    >
                      <DoneBookings booking={booking} />
                    </div>
                  )
              )}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
