import { DropdownItem } from "./MenuItems";

//Describes the structure of props for the DropdownItems component, containing an array of DropdownItemProps called items and an id
interface DropdownProps {
  items: DropdownItem[];
  id: string;
}

export default function DropdownItems({
  items,
  id,
}: DropdownProps): JSX.Element {
  return (
    <div
      id={id}
      className="mt-1 border-gray-200 shadow-sm bg-customBeige md:bg-customBeige border-y dark:bg-gray-800 dark:border-gray-600 grid grid-cols-2 gap-4"
    >
      {items.map((dropdownItem, i) => (
        <a
          key={i}
          href="#"
          className="block ml-24 p-3 border-b-2 rounded-lg hover:bg-customHover dark:hover:bg-gray-700"
        >
          <div className="font-semibold text-gray-900 dark:text-white">
            {dropdownItem.label}
          </div>

          <span className="text-sm text-customDark dark:text-gray-400">
            {dropdownItem.description}
            <span className=" inline-flex">
              <svg
                className="w-2.5 h-2.5 ms-2.5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 7 10"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1l4 4-4 4"
                />
              </svg>
            </span>
          </span>
        </a>
      ))}
    </div>
  );
}
