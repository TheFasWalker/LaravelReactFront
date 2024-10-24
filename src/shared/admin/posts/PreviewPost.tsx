
import { FC, useState, useEffect, useRef } from "react";

interface PostInterface {
    name: string;
    id: number;
    published?:number,
    onClick?:()=>void;
}

export const PreviewPost: FC<PostInterface> = ({ name,published, id , onClick}) => {
    const [dropDownState, setDropDownState] = useState(false);
    const dropdownRef = useRef<HTMLDivElement | null>(null);


    const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setDropDownState(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <tr className="border-b dark:border-gray-700">
            <th
                scope="row"
                className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
                {name}
            </th>
            <th
                scope="row"
                className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
                {published == 1 && (
                    <span className="flex px-3 py-2 rounded-md text-white  w-28 items-center justify-center bg-green-600">published</span>
                )}
                                {published == 0 && (
                    <span className="flex px-3 py-2 rounded-md text-white w-28 items-center justify-center bg-red-600 font-bold">not published</span>
                )}
            </th>

            <td className="px-4 py-3 flex items-center justify-end relative">
                <button
                    onClick={() => setDropDownState(!dropDownState)}
                    className="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
                    type="button"
                >
                    <svg
                        className="w-5 h-5"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                    </svg>
                </button>
                {dropDownState && (
                    <div
                        ref={dropdownRef} 
                        className="z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600 absolute"
                    >
                        <ul className="py-1 text-sm text-gray-700 dark:text-gray-200">
                            <li>
                                <button
                                data-id={id}
                                  onClick={onClick}
                                    className=" w-full text-left block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                    Edit
                                </button>
                            </li>
                        </ul>
                        <div className="py-1">
                            <button
                                className=" w-full text-left block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                )}
            </td>
        </tr>
    );
};