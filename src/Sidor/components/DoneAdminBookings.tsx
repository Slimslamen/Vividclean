import React from 'react'
import { Ibooking } from '../../types/types'

interface IAdminBooking{
    booking: Ibooking;
}

export default function DoneAdminBookings({ booking }:IAdminBooking) {
  return (
    <div className="m-5 border-b border-black bg-customDark text-white font-DM p-5 rounded-lg flex flex-row items-center justify-between">
    <div className="flex flex-row space-x-4">
      <li><span className="font-semibold text-lg">Datum:</span> {booking.date.toLocaleDateString()}</li>
      <li><span className="font-semibold text-lg">Tid:</span> {booking.time}</li>
      <li><span className="font-semibold text-lg">Tjänst:</span> {booking.service}</li>
    </div>
    <div className="flex flex-row space-x-3">
    <h3 className=" border border-solid text-white bg-customDark p-1 rounded-lg">
      Utförd
    </h3>
    </div>
  </div>
  )
}
