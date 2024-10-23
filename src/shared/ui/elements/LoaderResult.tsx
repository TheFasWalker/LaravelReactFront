import { FC } from "react"
import { BlueButton } from "./BlueBurron";

interface LoaderResultProps {
    state?: 'error' | 'sucsess' | 'undefined'
}

export const LoaderResult: FC<LoaderResultProps> = ({ state }) => {
    if (state == "error") {
        return (
            <div className=" absolute top-0 right-0 bottom-0 left-0 flex items-center justify-center bg-[#00000052]">
                <div className=" p-4 rounded-lg bg-white flex flex-col gap-4 items-center max-w-[50%]">
                    <h2>ПРоизошла непредвиденная ошибка</h2>
                    <BlueButton
                        title="Ясно-понятно!" />
                </div>

            </div>
        )
    }
    if (state == 'sucsess') {
        return (
            <div className=" absolute top-0 right-0 bottom-0 left-0 flex items-center justify-center bg-[#00000052]">
                <div className=" p-4 rounded-lg bg-white flex flex-col gap-4 items-center max-w-[50%]">
                    <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900 p-2 flex items-center justify-center mx-auto mb-3.5">
                        <svg aria-hidden="true" className="w-8 h-8 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                        <span className="sr-only">Success</span>
                    </div>
                    <h2 className="text-extrabold text-xl">Всё прошло удачно!</h2>
                    <BlueButton
                        title="Ясно-понятно!asd" />
                </div>

            </div>
        )
    }
    return null;
}