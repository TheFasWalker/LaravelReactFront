import { useEffect, useState } from "react";
import { BlueButton } from "../../shared/ui/elements/BlueBurron";
import { PopupLayout } from "../../shared/ui/layout/PopupLayout";
import { InputField } from "../../shared/ui/form/InputField";
import { TagPreview } from "../../shared/admin/tags/TagPreview";
import { Loader } from "../../shared/ui/elements/Loader";
import { useAppDispatch, useAppSelector } from "../../shared/hooks/redux";
import { getTags } from "../../entities/store/actions/tagsActions";

export const Tags = () => {
  const dispatch = useAppDispatch();
  const { isLoading, data, error } = useAppSelector(
    (state) => state.tagsReduser
  );
  const bearerToken = useAppSelector((state) => state.authReduser.token);
  const [popupState, setPopupState] = useState(false);
  const [createTagPopupState, setCreateTagPopupState] = useState(false);

  const EditElement = (e: React.MouseEvent<HTMLDivElement>) => {
    const dataId = e.currentTarget.getAttribute("data-id");
    setPopupState(!popupState);
  };
  const openCreatingTagPopup = () => {
    setCreateTagPopupState(!createTagPopupState);
  };

  useEffect(() => {
    dispatch(getTags(bearerToken));
    console.log(data)
  }, []);
  return (
    <section className="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5">
      <PopupLayout
        popupstate={createTagPopupState}
        changePopupState={() => setCreateTagPopupState(!createTagPopupState)}
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia assumenda
        aliquid est incidunt suscipit unde recusandae maiores aspernatur illo
        voluptas!
      </PopupLayout>
      <PopupLayout
        popupstate={popupState}
        changePopupState={() => setPopupState(!popupState)}
      >
        <h1 className=" text-black font-bold  text-3xl">Редактирвоание Тэга</h1>
        <form>
          <InputField
            type="text"
            title="Название Тэга"
            value="title10"
            placeholder="Название Тэга"
            name="title"
          />
          <div className=" w-full flex items-center mt-6 justify-center">
            <BlueButton title="Сохранить изменения" />
          </div>
        </form>
      </PopupLayout>

      <div className="mx-auto max-w-screen-xl px-4 lg:px-12 relative">
        <Loader loading={isLoading} />
        Тэги
        <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
          {!error && (
            <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
              <div className="w-full md:w-1/2">
                <form className="flex items-center">
                  <div className="relative w-full">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5 text-gray-500 dark:text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <input
                      type="text"
                      id="simple-search"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Search"
                    />
                  </div>
                </form>
              </div>
              <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
                <BlueButton onClick={openCreatingTagPopup} title="+ Add Item" />
              </div>
            </div>
          )}

          <div className="overflow-x-auto">
            {error && (
              <span className=" w-full flex items-center justify-center py-6 bg-red-300 text-bold text-5xl">
                {error}
              </span>
            )}
            {!data && !error && <h1> Список тэгов пуст</h1>}
            {!error && (
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-4 py-3">
                      Product name
                    </th>

                    <th scope="col" className="px-4 py-3">
                      <span className="sr-only">Actions</span>
                    </th>
                  </tr>
                </thead>
                <tbody>

                  {data.data.map((item) => (
                    <TagPreview
                      key={item.id}
                      name={item.title}
                      id={item.id}
                      edit={EditElement}
                    />
                  ))}
                </tbody>
              </table>
            )}
          </div>
          {!error && (
            <nav
              className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4"
              aria-label="Table navigation"
            >
              <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                Showing
                <span className="font-semibold text-gray-900 dark:text-white">
                  1-10
                </span>
                of
                <span className="font-semibold text-gray-900 dark:text-white">
                  1000
                </span>
              </span>
              <ul className="inline-flex items-stretch -space-x-px">
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    <span className="sr-only">Previous</span>
                    <svg
                      className="w-5 h-5"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    1
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    2
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    aria-current="page"
                    className="flex items-center justify-center text-sm z-10 py-2 px-3 leading-tight text-primary-600 bg-primary-50 border border-primary-300 hover:bg-primary-100 hover:text-primary-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                  >
                    3
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    ...
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    100
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    <span className="sr-only">Next</span>
                    <svg
                      className="w-5 h-5"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </nav>
          )}
        </div>
      </div>
    </section>
  );
};
