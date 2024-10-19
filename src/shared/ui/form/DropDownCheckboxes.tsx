import { FC, useEffect, useRef, useState } from "react";

type T = {
  value?: string;
  name: string;
  title: string;
};
interface DropDownCheckboxesInterface {
  title: string;
  data: Array<T>;
}

export const DropDownCheckboxes: FC<DropDownCheckboxesInterface> = ({
  title,
  data,
}) => {
  const [dropDownState, setDropDownState] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const closeDropDown = () => {
    setDropDownState(false);
  };
  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      closeDropDown();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div className=" relative" ref={dropdownRef}>
      <button
        className="w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        onClick={() => setDropDownState(!dropDownState)}
      >
        <svg
          className={`-ml-1 mr-1.5 w-5 h-5 ${dropDownState && "rotate-180"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
          />
        </svg>
        {title}
      </button>
      <ul
        className={`absolute top-full right-0 left-0 p-3 bg-white flex flex-col gap-3 overflow-x-auto max-h-28 ${
          !dropDownState && "hidden"
        }`}
      >
        {data.map((data,index) => (
          <li className="flex items-center cursor-pointer" key={index}>
            <label className=" flex flex-row gap-2 cursor-pointer">
              <input
                name={data.name}
                type="checkbox"
                value=""
                className="  w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <span className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
                {data.title}
              </span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};
