

interface DropdownItemProps {
  label: string;
  description: string;
}

interface DropdownProps {
  items: DropdownItemProps[];
  id: string;
}

export default function DropdownItems({ items, id }: DropdownProps): JSX.Element {
return (
    <div
    id={id}
    className="mt-1 border-gray-200 shadow-sm bg-customBeige md:bg-customBeige border-y dark:bg-gray-800 dark:border-gray-600 grid grid-cols-2 gap-4"
  >
    {items.map((dropdownItem, i) => (
      <a
        key={i}
        href="#"
        className="block p-3 border-b-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
      >
        <div className="font-semibold text-gray-900 dark:text-white">
          {dropdownItem.label}
        </div>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {dropdownItem.description}
        </span>
      </a>
    ))}
  </div>
);
        }