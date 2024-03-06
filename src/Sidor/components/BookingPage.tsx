import { Ibooking } from "../../types/types"
import { Timestamp } from "firebase/firestore"

interface Iprop{
    booking: Ibooking;
}

export default function BookingPage({ booking }:Iprop):JSX.Element {
    const { name, service, time, date, cleaner } = booking
    const newDate = new Date(Timestamp.now().seconds*1000).toLocaleDateString()
    console.log(newDate);
    
    //remaking timestamp to days instead of nanoseconds and seconds. Later in JSX I extract the day, month and year
    const day = new Date(date.seconds * 1000)
    const month = new Date(date.seconds * 1000)
    const year = new Date(date.seconds * 1000)
    

    return (
    <div className="w-full flex flex-row">
        <div className="flex flex-col md:flex-row space-x-2 w-full px-5 py-2 bg-customDark text-white text-xl rounded-lg items-center justify-between font-DM">
            {/* <input type="checkbox" className="size-4" checked={false} /> */}
            <h3>{name}</h3>
            <h3>{service}</h3>
            <h3>{time}</h3>
            <h3>{`${day.getDay()}/${month.getMonth()}/${year.getFullYear()}`}</h3>
            <h2>{cleaner}</h2>
        </div>
       
    </div>
    )
}
