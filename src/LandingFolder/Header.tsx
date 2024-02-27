import React from "react";
import { Checkbox, Label } from 'flowbite-react';


export default function Header() {
  return (
    <div>
      <div className="relative">
        <img
          className="w-full h-auto object-cover opacity-60"
          src="src/assets/heroimage3.jpg"
          alt="heroimage"
        />
        <div className="absolute top-0 w-full h-full flex justify-end items-end p-12">
          <div className="text-center mb-56">
            <h1 className="text-5xl text-black font-DM mt-5">Välkommen till VividClean</h1>
            <p className="text-lg mb-12 font-DM ">FÅ 15% RABATT PÅ DIN FÖRSTA BOKNING</p>
            <div className="flex max-w-md flex-col gap-4" id="checkbox">
      <div className="flex items-center gap-2">
      <input type="checkbox" id="filled-checkbox" className="hidden" checked />
  <label htmlFor="filled-checkbox" className="font-bold font-DM flex items-center cursor-not-allowed">
    <span className="w-6 h-6 bg-green-500 rounded-md flex justify-center items-center mr-2">
      <svg className="w-4 h-4 text-white fill-current" viewBox="0 0 20 20">
        <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
      </svg>
    </span>
    5/5 i betyg från våra kunder
  </label>
      </div>
      <div className="flex items-center gap-2">
      <input type="checkbox" id="filled-checkbox" className="hidden" checked />
  <label htmlFor="filled-checkbox" className="font-bold font-DM flex items-center cursor-not-allowed">
    <span className="w-6 h-6 bg-green-500 rounded-md flex justify-center items-center mr-2">
      <svg className="w-4 h-4 text-white fill-current" viewBox="0 0 20 20">
        <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
      </svg>
    </span>
    Kollektivavtal
  </label>
      </div>
      <div className="flex items-center gap-2">
      <input type="checkbox" id="filled-checkbox" className="hidden" checked />
  <label htmlFor="filled-checkbox" className="font-bold font-DM flex items-center cursor-not-allowed">
    <span className="w-6 h-6 bg-green-500 rounded-md flex justify-center items-center mr-2">
      <svg className="w-4 h-4 text-white fill-current" viewBox="0 0 20 20">
        <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
      </svg>
    </span>
    100% nöjd-kund-garanti
  </label>
      </div>
      <div className="flex gap-2">
        <div className="flex flex-col">
        <input type="checkbox" id="filled-checkbox" className="hidden" checked />
  <label htmlFor="filled-checkbox" className="flex items-center cursor-not-allowed font-DM font-bold">
    <span className="w-6 h-6 bg-green-500 rounded-md flex justify-center items-center mr-2">
      <svg className="w-4 h-4 text-white fill-current" viewBox="0 0 20 20">
        <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
      </svg>
    </span>
    Ingen bindningstid
  </label>
        </div>
      </div>
    </div>
            <button className="bg-customDark rounded p-2 font-DM text-white flex items-center ml-36 mt-10">Ta del av erbjudandet nu</button>
          </div>
        </div>
      </div>
    </div>
  );
}
