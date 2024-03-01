import DatePicker from "react-datepicker";
import { Ibooking } from "../types/types";
import { FormEvent, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import ComingBookings from "./components/ComingBookings";
import Services from "./components/Services";
import { Ioptions } from "../types/types";
import { Icleaners } from "../types/types";

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
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [selectedTime, setSelectedTime] = useState<string>("")
  const [selectedCleaner, setSelectedCleaner] = useState<Icleaners>({id:"", value:"", name:""})
  const [selectedService, setSelectedService] = useState<string>("")
  const [errors, setErrors] = useState()
  //Storing bookings
  const [booking, setBooking] = useState<Ibooking>({id:uuidv4(), name:"Sofia", date:new Date(), cleaner:"", time:"", service:"", status:false })
  const [allBookings, setAllBookings] = useState<Ibooking[]>([])


//Functions that submits all the values when submitted. this function is dependable of the onchanges on the inputs.
  const handleSubmit = (e:FormEvent) => {
    const newBooking:Ibooking = {
      id:uuidv4(), 
      name:"Sofia", 
      date:selectedDate, 
      cleaner:selectedCleaner.name, 
      time:selectedTime,
      service:selectedService, 
      status:false 
    }
    e.preventDefault()
    setBooking(newBooking)
    setSelectedDate(null)
    setSelectedTime("")
    setSelectedService("")
    setAllBookings(prev => [...prev, newBooking])
  }

  const handleCleaner = (e:FormEvent) => {
    const target = e.target as HTMLSelectElement;
    setSelectedCleaner({id:target.id, value:target.value, name:target.value});
    

  }

  return (
    <>
      <div className="bg-customBeige mx-auto w-full md:w-1/2 my-52 py-10 px-20 flex items-center justify-center flex-col space-y-10 rounded-md shadow-lg">
        <form className="flex items-center justify-center flex-col space-y-10" onSubmit={handleSubmit}>
          <h1 className="text-5xl font-DM">{`${"Sofia"}s`} bokningar</h1>
          <div>
            <h2 className="text-3xl font-DM">Boka städning</h2>
            <div className="flex flex-row justify-between py-5 space-x-3 md:space-x-0">
              <DatePicker onChange={(date:Date) => setSelectedDate(date)} filterDate={date => { return date.getDay() !== 0 && date.getDay() !== 6}}/* Disable weekends (Saturday and Sunday) */ minDate={new Date()} selected={selectedDate} />
              <input onChange={e => setSelectedTime(e.target.value)} value={selectedTime} id="time" type="time" min='08:00' max= '15:00' step="3600" className="p-1 rounded-lg w-5/12" />
            </div>
            <select onChange={handleCleaner} name="Städare" id="Städare" className="p-1 rounded-lg w-4/12 bg-transparent focus:outline-none">
              {cleaners.map((clean) => (
                <option key={clean.id} value={clean.value}>{clean.name}</option>
              ))}
            </select>
            <ul className="mt-2 items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
              {options.map((option) => (
                  <Services option={option} selectedService={selectedService} setSelectedService={setSelectedService}/>    
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
