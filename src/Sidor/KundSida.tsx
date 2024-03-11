import DatePicker from "react-datepicker";
import React, { FormEvent, useEffect, useId, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import Services from "./components/Services";
import { Ioptions, Icleaners, IformData, Ibooking, UserAuthContextProps } from "../types/types";
import { db } from "../config/firebase";
import { collection, getDocs, addDoc, deleteDoc, doc, } from "firebase/firestore";
import BookingPage from "./components/BookingPage";
import UserAuthContext from "../UserAuthContext";

const options: Ioptions[] = [
  {
    id: 0,
    service: "Basic",
    type:"Basic-checkbox-list"
  },
  {
    id: 1,
    service: "Fönsterputs",
    type:"Fönsterputs-checkbox-list"
  },
  {
    id: 2,
    service: "Diamanttvätt",
    type:"Diamanttvätt-checkbox-list"
  },
  {
    id: 3,
    service: "Flyttstädning",
    type:"Flyttstädning-checkbox-list"
  },
  {
    id: 4,
    service: "Toppstädning",
    type:"Toppstädning-checkbox-list"
  },
];
const cleaners:Icleaners[] = [
  {
    id: uuidv4(),
    value: "",
    name: "Städare"
  },
  {
    id: uuidv4(),
    value: "Estelle",
    name: "Estelle"
  },
  {
    id:uuidv4(),
    value: "Märta",
    name: "Märta"
  },
  {
    id:uuidv4(),
    value: "Jimmy",
    name: "Jimmy"
  }
]
export default function KundSida():JSX.Element {
  
  const { name, emailLogin } = React.useContext(
    UserAuthContext
  )! as UserAuthContextProps;

  
  const placeHolderDates = new Date().toLocaleDateString()
  //State to handle the form data
  const [formData, setFormData] = useState<IformData>({selectedDate:"", time:"", cleaner:"", service:""})
  //state with all the bookings
  const [Bookings, setBookings] = useState<Ibooking[]>([])
  const [reRender, setReRender] = useState<boolean>(false)
  
  
  const bookingsRef = collection(db, "users", emailLogin, "booking")
  
  const getBookings = async () => {
    try {
      const data = await getDocs(bookingsRef)
      const filteredData:Ibooking[] = data.docs.map((doc) => ({...doc.data(), id: doc.id}))         
      setBookings(filteredData)
      
    } catch (error) {
      console.log(error);
    }
  }
  const onSubmit = async(e:FormEvent) => {
    e.preventDefault()
    try {
      const { selectedDate ,time, cleaner, service} = formData
      await addDoc(bookingsRef, {date:selectedDate , time:time, cleaner:cleaner, service:service, status:status})
      getBookings()
      setFormData({selectedDate:"", time:"", cleaner:cleaners[0].name, service:""})
    } catch (error) {
      console.log(error);
    }
  }
  
  const deleteBooking =  async(id:string) => {
    const bookingDoc = doc(db, "users", emailLogin, "booking", id)
    await deleteDoc(bookingDoc)
     setReRender(!reRender)
     console.log(id);
     
  }

  useEffect(() => {
    getBookings()
  }, [reRender])
  
  
  
  return (
    <>
      <div className="bg-customBeige mx-auto w-full md:w-1/2 my-52 py-10 px-20 flex items-center justify-center flex-col space-y-10 rounded-md shadow-lg">
        <form className="flex items-center justify-center flex-col space-y-10" onSubmit={onSubmit}>
          <h1 className="text-5xl font-DM">{`${name}s`} bokningar</h1>
          <div>
            <h2 className="text-3xl font-DM mb-5">Boka städning</h2>
            <div className="flex flex-col md:flex-row w-full justify-between space-y-4 md:space-y-0">
              <div className="w-full flex flex-col items-start space-y-2">
                <DatePicker onChange={(date:Date) => setFormData(prev => ({ ...prev, selectedDate:date }))} placeholderText={placeHolderDates} filterDate={date => { return date.getDay() !== 0 && date.getDay() !== 6}}/* Disable weekends (Saturday and Sunday) */ minDate={new Date()} selected={formData.selectedDate} />
                <p className="px-2 py-1 bg-customDark text-white rounded-lg">Välj datum</p>
              </div>
              <div className="w-full flex flex-col md:items-end space-y-2">
                <input onChange={e => setFormData(prev => ({...prev, time:e.target.value}))} value={formData.time} id="time" type="time" min='08:00' max= '15:00' step="3600" className="p-1 rounded-lg w-5/12" />
                <p className="px-2 py-1 bg-customDark text-white rounded-lg">Välj tid</p>
              </div>
            </div>
            <div className="flex flex-col space-y-2 my-9">
              <select onChange={(e) => setFormData(prev => ({...prev, cleaner:e.target.value}))} name="Städare" id="Städare" className="p-1 rounded-lg w-4/12 bg-transparent focus:outline-none">
                {cleaners.map((clean) => (
                  <option key={clean.id} value={clean.value}>{clean.name}</option>
                  ))}
              </select>
              <p className="px-2 py-1 bg-customDark text-white rounded-lg w-52">Välj en städare</p>
            </div>
            <div className="flex flex-col space-y-2">
              <ul className="mt-2 items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                {options.map((option) => (
                  <Services key={option.id} option={option} formService={formData.service} setFormData={setFormData}/>    
                  ))}
              </ul>
              <p className="px-2 py-1 bg-customDark text-white rounded-lg">Välj en tjänst</p>
            </div>
          </div>
          <button type="submit" className="cursor-pointer bg-customDark text-white px-32 py-2 rounded-md hover:bg-customHoverDark duration-300 ease-in-out disabled:opacity-30 disabled:hover:bg-customDark disabled:cursor-auto">
            Boka nu
          </button>
        </form>
        <h2 className="text-3xl my-2 font-DM">Kommande bokningar</h2>
        {Bookings.map((booking) => (
          <div className="flex flex-row w-full">
            <BookingPage key={booking.id} booking={booking} />
            <button onClick={() => deleteBooking(booking.id)} className="ml-2 bg-customHoverDark rounded-lg hover:bg-customDark text-white duration-300 ease-in-out p-1 font-DM" >Ta bort bokning</button>
          </div>
          ))}
      </div>
      </>
  );
}




