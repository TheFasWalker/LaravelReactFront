import { useState } from "react"
import { BlueButton } from "../../shared/ui/elements/BlueBurron"
import { InputField } from "../../shared/ui/form/InputField"
import { Loader } from "../../shared/ui/elements/Loader"
import { LoaderResult } from "../../shared/ui/elements/LoaderResult"


export const Login =()=>{
    const [loading, setLoading] = useState(false)
    return(
    <div className=" flex items-center justify-center h-[100vh] w-[100vw] flex-col">
            <Loader
                loading={loading} />
                <LoaderResult />
                <h3 className="mb-3 text-2xl font-bold text-gray-900 dark:text-white text-center">
                    Форма входа
                </h3>
                <form action="#" className="flex flex-col  gap-3 w-64">
                    <InputField
                        title="Ваш email"
                        type="email"
                        name="email"
                        placeholder="Ваш email"
                        onChange={() => console.log()} />
                    <InputField
                        title="Ваш Пароль"
                        type="password"
                        name="password"
                        placeholder="*********"
                        onChange={() => console.log()} />
                    <BlueButton title="Войти" />
                </form>
            </div>
    )
}