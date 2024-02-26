import React, { useState } from "react";

export default function Navbar(): JSX.Element {
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isSecondDropdownOpen, setIsSecondDropdownOpen] = useState(false);

  const toggleMegaMenu = () => {
    setIsMegaMenuOpen((prev) => !prev);
    // Close the second dropdown when toggling the "Company" dropdown
    setIsSecondDropdownOpen(false);
  };

  const toggleSecondDropdown = () => {
    setIsSecondDropdownOpen((prev) => !prev);
    // Close the "Company" dropdown when toggling the second dropdown
    setIsMegaMenuOpen(false);
  };

  return (
    <nav className="bg-customBeige border-gray-200 dark:border-gray-600 dark:bg-gray-900">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-0">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="src/assets/Vivid.png"
            className="h-24 p-0"
            alt="Vivid Clean Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-customDark dark:text-white">
            Hållbar Renlighet, Ditt Hem i Perfekt Harmoni
          </span>
        </a>
        <button
          onClick={toggleMegaMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="mega-menu-full"
          aria-expanded={isMegaMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          id="mega-menu-full"
          className={`items-center justify-between font-medium w-full md:flex md:w-auto md:order-1 ${
            isMegaMenuOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-customBeige md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-customBeige dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <li>
              <button
                onClick={toggleMegaMenu}
                id="mega-menu-full-dropdown-button"
                aria-expanded={isMegaMenuOpen}
                className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded md:w-auto hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Städning{" "}
                <svg
                  className="w-2.5 h-2.5 ms-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
            </li>{" "}
            <li>
              {/* Button for the second dropdown */}
              <button
                onClick={toggleSecondDropdown}
                aria-expanded={isSecondDropdownOpen}
                className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded md:w-auto hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Vivid Clean{" "}
                <svg
                  className="w-2.5 h-2.5 ms-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div
        id="mega-menu-full-dropdown"
        className={`mt-1 border-gray-200 shadow-sm bg-customBeige md:bg-customBeige border-y dark:bg-gray-800 dark:border-gray-600 ${
          isMegaMenuOpen ? "block" : "hidden"
        }`}
      >
        <div className="grid max-w-screen-xl px-4 py-5 mx-auto text-gray-900 dark:text-white sm:grid-cols-2 md:px-6">
          <ul>
          <li className="border-b mx-1">
              <a
                href="#"
                className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <div className="font-semibold ">Fönsterputs</div>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  kort information om fönsterputs
                </span>
              </a>
            </li>
            <li className="border-b mx-1">
              <a
                href="#"
                className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <div className="font-semibold">Diamanttvätt</div>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Information om diamanttvätt
                </span>
              </a>
            </li>
            <li className="border-b mx-1">
              <a
                href="#"
                className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <div className="font-semibold">Basic städning</div>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  kort information om detta
                </span>
              </a>
            </li>
          </ul>
          <ul>
            <li className="border-b mx-1">
              <a
                href="#"
                className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <div className="font-semibold">Toppstädning</div>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  CKort information om detta
                </span>
              </a>
            </li>
            <li className="border-b mx-1">
              <a
                href="#"
                className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <div className="font-semibold">Flyttstädning</div>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  kort information om denna
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div
        id="second-dropdown"
        className={`mt-1 border-gray-200 shadow-sm bg-customBeige md:bg-customBeige border-y dark:bg-gray-800 dark:border-gray-600 ${
          isSecondDropdownOpen ? "block" : "hidden"
        }`}
      >
         <div className="grid max-w-screen-xl px-4 py-5 mx-auto text-gray-900 dark:text-white sm:grid-cols-2 md:px-6">
          <ul>
          <li className="border-b mx-1">
              <a
                href="#"
                className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <div className="font-semibold">Om oss</div>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  All information du behöver veta om oss
                </span>
              </a>
            </li>
            <li className="border-b mx-1">
              <a
                href="#"
                className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <div className="font-semibold">Kontakta oss</div>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  All kontaktinformation
                </span>
              </a>
            </li>
            <li className="border-b mx-1">
              <a
                href="#"
                className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <div className="font-semibold">FAQ</div>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  vanliga frågor redan besvarade
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
