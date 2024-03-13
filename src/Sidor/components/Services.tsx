import React from 'react'
import { Ioptions } from '../types/types';

interface Iservice{
    option:Ioptions;
    setFormData:React.Dispatch<React.SetStateAction<{
      selectedName: string;
      selectedDate: Date;
      time: string;
      cleaner: string;
      service: string;
      status: boolean;
  }>>
    formService: string;
}

export default function Services({option, formService, setFormData}:Iservice):JSX.Element {
//destructuring
const { type, service } = option

  return (
    <li className="w-full px-2 hover:bg-customHoverDark duration-300 ease-in-out rounded-md" >
    <div className="flex items-center ps-3">
      <input
        onChange={(e) => setFormData(prev => ({...prev, service:e.target.value}))}
        id={type}
        type="radio"
        required
        checked={service === formService}
        value={service}
        className="w-4 h-4 text-customDark bg-gray-100 border-gray-300 rounded focus:ring-customDark  "
      />
      <label
        htmlFor={type}
        className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        {service}
      </label>
    </div>
  </li>
  )
}

/* onChange={(e) => setSelectedService(e.target.value)} */