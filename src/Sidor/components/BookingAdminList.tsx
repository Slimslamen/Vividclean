import React from 'react'
import { Ibooking } from '../../types/types'

interface IAdminBooking{
    booking: Ibooking;
}

export default function BookingAdminList({ booking }:IAdminBooking) {
  return (
    <>
    <ul className="flex flex-row space-x-4">
      <li><span className="font-semibold text-lg">Datum:</span> {booking.date.toLocaleDateString()}</li>
      <li><span className="font-semibold text-lg">Tid:</span> {booking.time}</li>
      <li><span className="font-semibold text-lg">Tjänst:</span> {booking.service}</li>
    </ul>
    <div className="flex flex-row space-x-3">
     
      </div>
      </>
  )
}
