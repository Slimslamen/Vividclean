import React, { useState } from "react";
import { menuItems } from "./components/MenuItems";
import DropdownItems from "./components/DropdownItems";

export default function Navbar(): JSX.Element {
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);

  const toggleMegaMenu = () => { //Toggles the visibility of the mega menu and resets the active dropdown.
    setIsMegaMenuOpen((prev) => !prev);
    setActiveDropdown(null);
  };

  //function toggles the visibility of a specific dropdown based on its index and closes the mega menu.
  //If the dropdown is the same as the index of the item clicked on, its being set to null and closes, since its already open.
  //Otherwise, set the active dropdown to the index, effectively toggling and opening the corresponding dropdown.
  const toggleDropdown = (index: number) => { 
    setActiveDropdown((prev) => (prev === index ? null : index));
    setIsMegaMenuOpen(false); // Close mega menu when toggling individual dropdowns
  };

  return (
    <nav className=" z-10 sticky top-0 bg-customBeige border-gray-200 dark:border-gray-600 dark:bg-gray-900">
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
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-customHover focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="mega-menu-full"
          aria-expanded={isMegaMenuOpen}
        >
          <span className="sr-only">Open main menu</span>{/*  For screen readers */}
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
            {menuItems.map((item, index) => (
              <li key={index}>
                <button
                  onClick={() => toggleDropdown(index)}
                  aria-expanded={activeDropdown === index}
                  className={
                    "flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded md:w-auto hover:bg-customHover md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                  }
                  id={`dropdown-button-${index}`}
                >
                  {item.label}{" "}
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
            ))}
          </ul>
        </div>
      </div>

      {/* Single dropdown component outside the loop */}
      {activeDropdown !== null && (
        <DropdownItems items={menuItems[activeDropdown].dropdownItems} id={`dropdown-${activeDropdown}`} />
      )}
    </nav>
  );
}