import { Ifirebase } from "../../types/types"

interface Iprop{
  firebaseBooking: Ifirebase;
}

export default function BookingPage({firebaseBooking}:Iprop):JSX.Element {

  return (
  <div className="w-full">
    <div className="flex flex-row space-x-2 w-full px-5 py-2 bg-customDark text-white text-xl rounded-lg items-center justify-between font-DM">
      {/* <input type="checkbox" className="size-4" checked={false} /> */}
      <h2>{firebaseBooking.name}</h2>
      <h3>{firebaseBooking.service}</h3>
      <h3>{firebaseBooking.time}</h3>
      <h3>{firebaseBooking.date}</h3>
      <h2>{firebaseBooking.cleaner}</h2>
    </div>
  </div>
  )
}
