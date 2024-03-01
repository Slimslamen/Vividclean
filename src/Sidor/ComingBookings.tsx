import { Ibooking } from "../types/types"

interface Iprop{
  booking: Ibooking;
}

export default function ComingBookings({booking}:Iprop):JSX.Element {
  return (
  <div className="w-full">

    <div className="flex flex-row space-x-2 w-full px-5 py-2 bg-customDark text-white text-xl rounded-lg items-center justify-between font-DM">
      <input type="checkbox" className="size-4" disabled checked={false} />
      <h2>Sofia</h2>
      <h3>{booking.service}</h3>
      <h3>{booking.time}</h3>
      <h3>{booking.date ? `${booking.date.getMonth()}/${booking.date.getDate()}/${booking.date.getFullYear()}`: null}</h3>
      <h2>{booking.cleaner}</h2>
    </div>
  </div>
  )
}
