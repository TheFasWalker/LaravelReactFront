import { useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../hooks/redux"
import { authSlice } from "../../entities/store/slices/authSlice"

export const Header = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate();

  const [userDataPopup, setUserDataPopup] = useState(false)
  const { name, email} = useAppSelector((state) => state.authReduser)
  const toggleUserPopupData = () => {
    setUserDataPopup(!userDataPopup)
  }


  const logOutButton = () => {
    dispatch(authSlice.actions.authLogOut())
    navigate('/login')

  }

  return (
    <nav className="bg-white border-b border-gray-200 px-4 py-2.5 dark:bg-gray-800 dark:border-gray-700 fixed left-0 right-0 top-0 z-50">
      <div className="flex flex-wrap justify-between items-center">
        <div className="flex justify-start items-center">

          <a href="https://flowbite.com" className="flex items-center justify-between mr-4">
            <img
              src="https://flowbite.s3.amazonaws.com/logo.svg"
              className="mr-3 h-8"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
          </a>

        </div>
        <div className="flex items-center lg:order-2">
          <div className=" relative">
            <div
              className=" h-10 w-10 bg-slate-500 rounded-full cursor-pointer"
              onClick={() => toggleUserPopupData()}
            ></div>
            {userDataPopup && (
              <div className=" absolute right-0 top-full z-50 my-4 w-56 text-base list-none bg-white divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600 rounded-xl block" id="dropdown" data-popper-placement="bottom" >
                <div className="py-3 px-4">
                  <span className="block text-sm font-semibold text-gray-900 dark:text-white">{name}</span>
                  <span className="block text-sm text-gray-900 truncate dark:text-white">{email}</span>
                </div>
                <ul className="py-1 text-gray-700 dark:text-gray-300" aria-labelledby="dropdown">
                  <li>
                    <NavLink to={'/user'} className="block py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">My profile</NavLink>
                  </li>
                  <li>
                    <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">Account settings</a>
                  </li>
                </ul>
                  <ul className="py-1 text-gray-700 dark:text-gray-300" aria-labelledby="dropdown">
                    <li>
                      <a href="#" className="flex items-center py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"><svg className="mr-2 w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"></path>
                      </svg>
                        My likes</a>
                    </li>
                    <li>
                      <a href="#" className="flex items-center py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"><svg className="mr-2 w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path>
                      </svg>
                        Collections</a>
                    </li>

                  </ul>
                <ul className="py-1 text-gray-700 dark:text-gray-300" aria-labelledby="dropdown">
                  <li>
                    <button onClick={logOutButton} className="block py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</button>
                  </li>
                </ul>
              </div>
            )}


          </div>
        </div>
      </div>

    </nav>

  )
}