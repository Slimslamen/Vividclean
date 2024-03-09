import React from 'react'

export default function PersonalSida():JSX.Element {
  return (
    <>
    <h1 className="font-DM text-5xl flex items-center justify-center mt-16 border-b border-grey">Personal</h1>
    <div className='flex md:flex-cols-2 md:gap-4'>
    <div className="w-full h-96 mt-10 mb-10">
        <h2 className="font-DM text-xl flex items-center justify-center border-b border-black mb-4">Dina kommande arbetspass</h2>

    </div>
    <div className="w-full h-96 mt-10 ml-[5%]">
        <h2 className="font-DM text-xl flex items-center justify-center border-b border-black mb-4">Dina utförda arbetspass</h2>

    </div>
    </div>
    </>
  )
}
