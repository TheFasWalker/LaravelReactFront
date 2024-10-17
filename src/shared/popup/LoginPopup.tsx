import { FC, useState } from "react"
import { BlueButton } from "../ui/elements/BlueBurron"
import { InputField } from "../ui/form/InputField"
import { PopupLayout } from "../ui/layout/PopupLayout"
import { Loader } from "../ui/elements/Loader"
import { LoaderResult } from "../ui/elements/LoaderResult"

interface LoginPopupProps{
  popupState:boolean,
  changePopupState:()=>void
}
export const LoginPopup:FC<LoginPopupProps> = ({popupState,changePopupState}) => {
  const [loading,setLoading] = useState(false)
    return (
        <PopupLayout
          popupstate={popupState}
          changePopupState={changePopupState}
          >
          <Loader 
          loading={loading}
          />
          <LoaderResult 
           />
            <h3 className="mb-3 text-2xl font-bold text-gray-900 dark:text-white text-center">
              Форма входа
            </h3>
            <form action="#" className="flex flex-col  gap-3">
              <InputField
                title="Ваш email"
                type="email"
                name="email"
                placeholder="Ваш email"
                onChange={()=>console.log()}
              />
              <InputField
                title="Ваш Пароль"
                type="password"
                name="password"
                placeholder="*********"
                onChange={()=>console.log()}
              />
              <BlueButton title="Войти" />
            </form>
        </PopupLayout>
    )
}