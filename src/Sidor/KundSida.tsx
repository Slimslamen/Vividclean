import { Dropdown, DropdownItem  } from "flowbite-react";
import DatePicker from "react-datepicker";

import { FormEvent, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

interface Ioptions {
  id: number;
  service: string;
  type:string;
}
interface Ibooking{
  id:string;
  name:string;
  date: Date
  cleaner: string;
  time: string;
  service: string;
  status: boolean;
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

export default function KundSida():JSX.Element {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [selectedTime, setSelectedTime] = useState<string>("")
  const [selectedCleaner, setSelectedCleaner] = useState<string>("")
  //Storing bookings
  const [booking, setBooking] = useState<Ibooking>({id:uuidv4(), name:"Sofia", date:selectedDate, cleaner:"", time:selectedTime, service:selectedCleaner, status:false })

  
//Functions that submits all the values when submitted. this function is dependable of the onchanges on the inputs.
  const handleSubmit = (e:FormEvent) => {
    e.preventDefault()
    console.log("time:",selectedTime);
    console.log(`Date: ${selectedDate.getMonth()}/${selectedDate.getDate()}/${selectedDate.getFullYear()}`);
    console.log("Service:", selectedCleaner);
    
    
  }

  return (
    <>
      <div className="bg-customBeige mx-auto w-full md:w-1/2 my-52 py-10 px-20 flex items-center justify-center flex-col space-y-10 rounded-md shadow-lg">
        <form className="flex items-center justify-center flex-col space-y-10" onSubmit={handleSubmit}>
          <h1 className="text-5xl font-DM">{`${"Sofia"}s`} bokningar</h1>
          <div>
            <h2 className="text-3xl font-DM">Boka städning</h2>
            <div className="flex flex-row justify-between py-5 space-x-3 md:space-x-0">
              <DatePicker onChange={(date:Date) => setSelectedDate(date)} filterDate={date => { return date.getDay() !== 0 && date.getDay() !== 6;}}/* Disable weekends (Saturday and Sunday) */ minDate={new Date()} selected={selectedDate} />
              <input onChange={e => setSelectedTime(e.target.value)} value={selectedTime} id="time" type="time" min='08:00' max= '15:00' step="3600" className="p-1 rounded-lg w-5/12" />
            </div>
            <select onChange={(e) => setSelectedCleaner(e.target.value)} name="Städare" id="Städare" className="p-1 rounded-lg w-4/12 bg-transparent focus:outline-none">
              <option value="">Städare</option>
              <option value="Estelle">Estelle</option>
              <option value="Märta">Märta</option>
              <option value="Jimmy">Jimmy</option>
            </select>
            <ul className="mt-2 items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
              {options.map((option) => (
                <li className="w-full px-2 hover:bg-customHoverDark duration-300 ease-in-out rounded-md">
                  <div className="flex items-center ps-3">
                    <input
                      id={option.type}
                      type="checkbox"
                      value={option.service}
                      className="w-4 h-4 text-customDark bg-gray-100 border-gray-300 rounded focus:ring-customDark  "
                    />
                    <label
                      htmlFor={option.type}
                      className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      {option.service}
                    </label>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <button type="submit" className="bg-customDark text-white px-32 py-2 rounded-md hover:bg-customHoverDark duration-300 ease-in-out">
            Boka nu
          </button>
        </form>
        <div>
          <h2>Kommande bokningar</h2>
          {}
        </div>
        <div>
          <h2>utförda bokningar</h2>
          {}
        </div>
      </div>
      </>
  );
}
