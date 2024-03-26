import { Ibooking } from "../../types/types"

interface Iprop{
  booking: Ibooking;
}

export default function ComingBookings({booking}:Iprop):JSX.Element {
//destructuring the booking state to access all the different types
  const { service, time, date, cleaner } = booking

  return (
  <div className="w-full">
    <div className="flex flex-row space-x-2 w-full px-5 py-2 bg-customDark text-white text-xl rounded-lg items-center justify-between font-DM">
      {/* <input type="checkbox" className="size-4" checked={false} /> */}
      <h3>{service}</h3>
      <h3>{time}</h3>
      <h3>{date ? `${date.getMonth()}/${date.getDate()}/${date.getFullYear()}`: null}</h3>
      <h2>{cleaner}</h2>
    </div>
  </div>
  )
}
