import { FC } from "react"

interface inputProps {
    title: string;
    placeholder:string;
    type?: string;
    name:string;
    onChange?:(event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputField:FC<inputProps> = ({title, placeholder, type = 'text', name, onChange}) => {
    <div className="mb-5">
        <label>
            <span className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> {title}</span>
            <input
                type={type}
                name={name}
                onChange={onChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder={placeholder}
                 />
        </label>


  </div>
}