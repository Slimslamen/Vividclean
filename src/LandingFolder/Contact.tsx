import React from "react";

export default function Contact() {
  return (
    <div className="w-full h-auto flex items-center justify-center mt-10 mb-10 "> 
    <h1 className="font-DM text-3xl">Vi finns här för att hjälpa dig, tveka inte på att kontaka oss! </h1>
      <div className="w-80 h-auto border border-solid flex items-center justify-center bg-customBeige">
        <form className="max-w-sm mx-auto">
          <div>
            <label
              htmlFor="small-input"
              className="block mt-5 mb-5 text-sm font-DM font-bold text-gray-900 dark:text-white"
            >
              Namn:
            </label>
            <input
              type="text"
              id="small-input"
              className="block w-full p-2 mb-5 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            <label
              htmlFor="small-input"
              className="block mb-5 text-sm font-DM font-bold text-gray-900 dark:text-white"
            >
              E-post:
            </label>
            <input
              type="text"
              id="small-input"
              className="block w-full p-2 mb-5 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <label
            htmlFor="message"
            className="block mb-5 text-sm font-DM font-bold text-gray-900 dark:text-white"
          >
            Ditt meddelande:
          </label>
          <textarea
            id="message"
            className="p-2.5 mb-5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Skriv ditt meddelande här"
          ></textarea>
          <button type="submit" className="bg-customDark hover:bg-gray-700 rounded-lg text-white font-DM mb-10 p-2">
            Kontakta oss
          </button>
        </form>
      </div>
    </div>
  );
}
