import DatePicker from "react-datepicker";
import React, { FormEvent, useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import ComingBookings from "./components/ComingBookings";
import Services from "./components/Services";
import { Ioptions, Icleaners, ContextType, Ibooking, Ifirebase } from "../types/types";
import { ProductContext } from "../ProductContext";
import { db } from "../config/firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";
import BookingPage from "./components/BookingPage";

interface Ierrors {
  time:string
  cleaner: string;
  service:string;
  date: string;
}

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
  //getting the saved username from productcontext
  const { user } = React.useContext(ProductContext) as ContextType;
  const savedName = user.username
  //state for the text the variables
  const [formErrors, setFormErrors] = useState<Ierrors>({date:"", time:"", cleaner:"", service:""})
  //State to handle the form data
  const [formData, setFormData] = useState({selectedDate:new Date(), time:"", cleaner:"", service:""})
  //Storing bookings
  const [booking, setBooking] = useState<Ibooking>({id:"", name:savedName, selectedDate:formData.selectedDate, cleaner:"", time:"", service:"", status:false })
  //state with all the bookings
  const [allBookings, setAllBookings] = useState<Ibooking[]>([])
  const [firebaseBookings, setFirebaseBookings] = useState<Ifirebase[]>([])
  
  const bookingsRef = collection(db, "bookings")
  
  useEffect(() => {
    const getBookings = async () => {
      try {
        const data = await getDocs(bookingsRef)
        const filteredData: Ifirebase[] = data.docs.map((doc) => ({...doc.data(), id: doc.id}))         
        setFirebaseBookings(filteredData)
      } catch (error) {
        console.log(error);
        
      }
    }

    getBookings()
  }, [])
  //Functions that submits all the values when submitted. this function is dependable of the onchanges on the inputs.
  const handleSubmit = (e:FormEvent) => {
    e.preventDefault()
    //destructuring the formData
    const { selectedDate, cleaner, time, service } = formData
    //Saving the written bookings in a new object
    const newBooking:Ibooking = {
      id:uuidv4(), 
      name:savedName, 
      selectedDate:selectedDate, 
      cleaner:cleaner, 
      time:time,
      service:service, 
      status:false 
    }
    //updating the booking state with newbooking values
    if(time && cleaner && cleaner !== "Städare" && service){
      setBooking(newBooking)
      //updating the booking array with a new object
      setAllBookings(prev => [...prev, newBooking])
    }
    
    //passing handleErrors to the formErrors state that I use in the JSX
    const Errors = handleErrors()
    setFormErrors(Errors)
    
  }  
  //validating the form
  const handleErrors = () => {
    const errors:Ierrors = {date:"",time:"", cleaner:"", service:""}
    const { time, cleaner, service} = booking

    if(!time){
      errors.time = "Välj en tid"
    }
    if(!cleaner || cleaner === "Städare"){
      errors.cleaner = "Välj en städare"
    }
    if(!service){
      errors.service = "Välj en tjänst"
    }  
    return errors
  }

  const onSubmit = async() => {
    try {
      const { selectedDate, time, cleaner, service} = formData
      await addDoc(bookingsRef, {date:selectedDate, time:time, cleaner:cleaner, service:service})
    } catch (error) {
      console.log(error);
    }
  }
  const name = firebaseBookings.map((firebaseBooking) => firebaseBooking.name)

  return (
    <>
      <div className="bg-customBeige mx-auto w-full md:w-1/2 my-52 py-10 px-20 flex items-center justify-center flex-col space-y-10 rounded-md shadow-lg">
        <form className="flex items-center justify-center flex-col space-y-10" onSubmit={handleSubmit}>
          <h1 className="text-5xl font-DM">{`${name}s`} bokningar</h1>
          <div>
            <h2 className="text-3xl font-DM mb-5">Boka städning</h2>
            <div className="flex flex-row w-full justify-between">
              <div className="w-full flex flex-col items-start space-y-2">
                <DatePicker onChange={(date: Date) => setFormData(prev => ({ ...prev, selectedDate:date }))} filterDate={date => { return date.getDay() !== 0 && date.getDay() !== 6}}/* Disable weekends (Saturday and Sunday) */ minDate={new Date()} selected={formData.selectedDate} />
              </div>
              <div className="w-full flex flex-col items-end space-y-2">
                <input onChange={e => setFormData(prev => ({...prev, time:e.target.value}))} value={formData.time} id="time" type="time" min='08:00' max= '15:00' step="3600" className="p-1 rounded-lg w-5/12" />
                {formErrors.time && <p className="px-2 py-1 bg-red-300 text-red-700 rounded-lg">{formErrors.time}</p>}
              </div>
            </div>
            <div className="flex flex-col space-y-2 my-9">
              <select onChange={(e) => setFormData(prev => ({...prev, cleaner:e.target.value}))} name="Städare" id="Städare" className="p-1 rounded-lg w-4/12 bg-transparent focus:outline-none">
                {cleaners.map((clean) => (
                  <option key={clean.id} value={clean.value}>{clean.name}</option>
                  ))}
              </select>
              {formErrors.cleaner && <p className="px-2 py-1 bg-red-300 text-red-700 rounded-lg w-52">{formErrors.cleaner}</p>}
            </div>
            <div className="flex flex-col space-y-2">
              <ul className="mt-2 items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                {options.map((option) => (
                  <Services option={option} formService={formData.service} setFormData={setFormData}/>    
                  ))}
              </ul>
              {formErrors.service && <p className="px-2 py-1 bg-red-300 text-red-700 rounded-lg">{formErrors.service}</p>}
            </div>
          </div>
          <button type="submit" className="cursor-pointer bg-customDark text-white px-32 py-2 rounded-md hover:bg-customHoverDark duration-300 ease-in-out disabled:opacity-30 disabled:hover:bg-customDark disabled:cursor-auto">
            Boka nu
          </button>
        </form>
        <h2 className="text-3xl my-2 font-DM">Kommande bokningar</h2>
        {firebaseBookings.map((firebaseBooking) => (
          <BookingPage key={firebaseBooking.id} firebaseBooking={firebaseBooking}/>
        ))}
        {/*      {allBookings.map((one) => (
          <ComingBookings key={one.id} booking={one}/>
          ))}
      */}
      </div>
      </>
  );
}
