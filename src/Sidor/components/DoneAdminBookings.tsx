import React from 'react';
import { Ibooking } from '../../types/types';

interface IAdminBooking {
    booking: Ibooking;
}

export default function DoneAdminBookings({ booking }: IAdminBooking) {
    const formattedDate = booking.date instanceof Date ? booking.date.toLocaleDateString() : '';

    return (
        <div className='flex flex-row space-x-5'>
            <div className="flex items-center justify-center space-x-10">
                <li><span className="font-semibold text-lg">Datum:</span> {formattedDate}</li>
                <li><span className="font-semibold text-lg">Tid:</span> {booking.time}</li>
                <li><span className="font-semibold text-lg">Tjänst:</span> {booking.service}</li>
            </div>
        
        </div>
    );
}
