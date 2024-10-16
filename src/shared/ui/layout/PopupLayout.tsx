import { BlueButton } from "../elements/BlueBurron";
import { InputField } from "../form/InputField";

export const PopupLayout = () => {
  return (
    <div className="flex items-center justify-center overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full bg-[#0000007a]">
      <div className="relative p-4 w-full max-w-lg h-full md:h-auto">
        <div className="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 md:p-8">
          <button className="absolute -top-5 -right-5 h-12 w-12 rounded-full shadow flex justify-center items-center bg-white">
                      <svg
                          className=" h-7 w78"
              fill="#000000"
              viewBox="0 0 512 512"
              xml:space="preserve"
            >
              <g>
                <g>
                  <polygon
                    points="512,59.076 452.922,0 256,196.922 59.076,0 0,59.076 196.922,256 0,452.922 59.076,512 256,315.076 452.922,512
			512,452.922 315.076,256 		"
                  />
                </g>
              </g>
            </svg>
          </button>
          <div className="mb-4 text-sm font-light text-gray-500 dark:text-gray-400">
            <h3 className="mb-3 text-2xl font-bold text-gray-900 dark:text-white">
              Форма входа
            </h3>
            <form action="#">
              <InputField
                title="Ваш email"
                type="email"
                name="email"
                placeholder="Ваш email"
              />
              <InputField
                title="Ваш Пароль"
                type="password"
                name="password"
                placeholder="*********"
              />
              <BlueButton title="Войти" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
