import { BlueButton } from "../ui/elements/BlueBurron"
import { InputField } from "../ui/form/InputField"
import { PopupLayout } from "../ui/layout/PopupLayout"

export const LoginPopup = () => {
    return (
        <PopupLayout>
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