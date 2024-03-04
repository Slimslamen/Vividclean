import React from 'react'
import { Ioptions } from '../../types/types';

interface Iservice{
    option:Ioptions;
    service:string;
    setFormData:React.Dispatch<React.SetStateAction<{
      selectedDate: Date;
      time: string;
      cleaner: string;
      service: string;
  }>>

}

export default function Services({option, service, setFormData}:Iservice):JSX.Element {
  return (
    <li className="w-full px-2 hover:bg-customHoverDark duration-300 ease-in-out rounded-md" >
    <div className="flex items-center ps-3">
      <input
        onChange={(e) => setFormData(prev => ({...prev, service:e.target.value}))}
        id={option.type}
        type="radio"
        checked={service === option.service}
        value={option.service}
        className="w-4 h-4 text-customDark bg-gray-100 border-gray-300 rounded focus:ring-customDark  "
      />
      <label
        htmlFor={option.type}
        className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        {option.service}
      </label>
    </div>
  </li>
  )
}

/* onChange={(e) => setSelectedService(e.target.value)} */