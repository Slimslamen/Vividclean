import React from "react";
import { Ibooking } from "../../types/types";

interface ICustomerBooking {
  booking: Ibooking;
}

export const DoneBookings = ({ booking }: ICustomerBooking) => {
  const { date } = booking;
  const formattedDate = date instanceof Date ? date.toLocaleDateString() : '';

  return (
    <div className="flex flex-row space-x-5">
      <ul className="flex items-center justify-center space-x-10">
        <li>
          <span className="font-semibold text-lg">Datum:</span> {formattedDate}
        </li>
        <li>
          <span className="font-semibold text-lg">Tid:</span> {booking.time}
        </li>
        <li>
          <span className="font-semibold text-lg">Tjänst:</span> {booking.service}
        </li>
      </ul>
    </div>
  );
};
