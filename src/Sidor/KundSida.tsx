import DatePicker from "react-datepicker";
import { Ibooking } from "../types/types";
import React, { FormEvent, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import ComingBookings from "./components/ComingBookings";
import Services from "./components/Services";
import { Ioptions } from "../types/types";
import { Icleaners } from "../types/types";
import { ProductContext } from "../ProductContext";
import { ContextType } from "../types/types";

interface Ierrors {
  time:string
  cleaner: string;
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

  const { user } = React.useContext(ProductContext) as ContextType;

  const savedName = user.username
  


  const [formData, setFormData] = useState({selectedDate:new Date(), time:"", cleaner:"", service:""})
  const [formErrors, setFormErrors] = useState<Ierrors>({time:"", cleaner:""})
  //Storing bookings
  const [booking, setBooking] = useState<Ibooking>({id:uuidv4(), name:savedName, date:new Date(), cleaner:"", time:"", service:"", status:false })
  const [allBookings, setAllBookings] = useState<Ibooking[]>([])

  
  const handleErrors = () => {
    const errors:Ierrors = {time:"", cleaner:""}
    if(!booking.time){
      errors.time = "Välj en tid"
    }
    if(!booking.cleaner){
      errors.cleaner = "Välj en städare"
    }
    return errors
  }

//Functions that submits all the values when submitted. this function is dependable of the onchanges on the inputs.
  const handleSubmit = (e:FormEvent) => {
    const { selectedDate, cleaner, time, service } = formData
    const newBooking:Ibooking = {
      id:uuidv4(), 
      name:savedName, 
      date:selectedDate as Date, 
      cleaner:cleaner, 
      time:time,
      service:service, 
      status:false 
    }
    e.preventDefault()
    setBooking(newBooking)
    setAllBookings(prev => [...prev, newBooking])

    const Errors = handleErrors()
    setFormErrors(Errors)
  }

  console.log(formData.cleaner);
  

  return (
    <>
      <div className="bg-customBeige mx-auto w-full md:w-1/2 my-52 py-10 px-20 flex items-center justify-center flex-col space-y-10 rounded-md shadow-lg">
        <form className="flex items-center justify-center flex-col space-y-10" onSubmit={handleSubmit}>
          <h1 className="text-5xl font-DM">{`${savedName}s`} bokningar</h1>
          <div>
            <h2 className="text-3xl font-DM">Boka städning</h2>
            <div className="flex flex-row w-full justify-between">
              <DatePicker onChange={(date: Date) => setFormData(prev => ({ ...prev, selectedDate:date }))} filterDate={date => { return date.getDay() !== 0 && date.getDay() !== 6}}/* Disable weekends (Saturday and Sunday) */ minDate={new Date()} selected={formData.selectedDate} />
              <input onChange={e => setFormData(prev => ({...prev, time:e.target.value}))} value={formData.time} id="time" type="time" min='08:00' max= '15:00' step="3600" className="p-1 rounded-lg w-5/12" />
            </div>
            <select onChange={(e) => setFormData(prev => ({...prev, cleaner:e.target.value}))} name="Städare" id="Städare" className="p-1 rounded-lg w-4/12 bg-transparent focus:outline-none">
              {cleaners.map((clean) => (
                <option key={clean.id} value={clean.value}>{clean.name}</option>
              ))}

            </select>
            {formErrors.cleaner && <p>{formErrors.cleaner}</p>}
            <ul className="mt-2 items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
              {options.map((option) => (
                  <Services option={option} service={formData.service} setFormData={setFormData}/>    
              ))}
            </ul>
          </div>
          <button type="submit" className="bg-customDark text-white px-32 py-2 rounded-md hover:bg-customHoverDark duration-300 ease-in-out">
            Boka nu
          </button>
        </form>
        <h2 className="text-3xl my-2 font-DM">Kommande bokningar</h2>
        {allBookings.map((one) => (
          <ComingBookings key={one.id} booking={one}/>
        ))}
     
      </div>
      </>
  );
}
