import { Ibooking } from "../../types/types"

interface Iprop{
    booking: Ibooking;
}

export default function BookingPage({ booking }:Iprop):JSX.Element {
    const { name, service, time, date, cleaner } = booking
    const shownDate = date.toDate().toLocaleDateString()


    return (
    <div className="w-full flex flex-row">
        <div className="flex flex-col md:flex-row space-x-2 w-full px-5 py-2 bg-customDark text-white text-xl rounded-lg items-center justify-between font-DM">
            {/* <input type="checkbox" className="size-4" checked={false} /> */}
            <h3>{name}</h3>
            <h3>{service}</h3>
            <h3>{time}</h3>
            <h3>{shownDate}</h3>
            <h2>{cleaner}</h2>
        </div>
       
    </div>
    )
}
