import { FormEvent, useEffect, useState } from "react"
import { PreviewPost } from "../../shared/admin/posts/PreviewPost"
import { useAppDispatch, useAppSelector } from "../../shared/hooks/redux"
import { BlueButton } from "../../shared/ui/elements/BlueBurron"
import { Loader } from "../../shared/ui/elements/Loader"
import { DropDownCheckboxes } from "../../shared/ui/form/DropDownCheckboxes"
import { getPosts } from "../../entities/store/actions/postAction"
import { Pagination } from "../../shared/admin/HOC/pagination"

export const Posts = () => {
  const bearerToken = useAppSelector((state) => state.authReduser.token);
  const dispatch = useAppDispatch();
  const { isLoading, data, error } = useAppSelector((state) => state.postReduser);
  const [sortingText , setSortingText]= useState('All')
  const [sortingDropDown, setsortingDropDown] = useState(false)
  const [searchData, setSearchData] = useState('')
  const [sortingType, setSortyngType] = useState('')
  const [queryData, setQueryData] = useState('');

  const composingSearchData =()=>{
    const type = sortingType
    const field = `title=${searchData}`
    if(searchData && sortingType){
      setQueryData(`${field}&${type}`)
    }else if (!type){

      setQueryData(field)
    }else{
      setQueryData(type)
    }

  }

  const searchField = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchData(event.target.value);
};
const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
  formSubmit(event)
  composingSearchData()
};
const formSubmit = (event: FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  console.log(searchData);
}
  useEffect(() => {
    dispatch(getPosts(bearerToken, sortingType))
    console.log(data)
  }, [queryData])
  return (
    <section className="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5">
      Список постов
      <Loader loading={isLoading}
      />

      <div className="mx-auto max-w-screen-xl px-4 lg:px-12">
        <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
            <div className="w-full md:w-1/2">
              <form className="flex items-center" onSubmit={formSubmit}>
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
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Search"
                    value={searchData}
                    onChange={searchField}
                    onBlur={handleBlur}
                  />
                </div>
              </form>
            </div>
            <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
                <div className=" w-32 relative ">
                <BlueButton title={sortingText} onClick={() => setsortingDropDown(!sortingDropDown)} />
                {sortingDropDown && (
                  <div className=" absolute z-10 bg-green-100 flex flex-col gap-1 w-full ">
                    {sortingType != 'is_published=1' && (
                      <button
                        className=" rounded-lg shadow py-1 font-bold cursor-pointer"
                        onClick={() => {
                          setSortyngType('is_published=1')
                          setSortingText('published')
                          setsortingDropDown(false)
                          composingSearchData()
                        }}
                      >published</button>
                    )}
                    {sortingType != 'is_published=0' && (
                      <button
                        className=" rounded-lg shadow py-1 font-bold cursor-pointer"
                        onClick={() => {
                          setSortyngType('is_published=0')
                          setSortingText('not published')
                          setsortingDropDown(false)
                          composingSearchData()
                        }}
                      >not published</button>
                    )}
                    {sortingType != '' && (
                      <button
                        className=" rounded-lg shadow py-1 font-bold cursor-pointer"
                        onClick={() => {
                          setSortyngType('')
                          setSortingText('All')
                          setsortingDropDown(false)
                          composingSearchData()
                        }}
                      >all</button>
                    )}
                  </div>
                )}
              </div>

              <BlueButton title="+ Add Item" />



            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-4 py-3">
                    Product name
                  </th>

                  <th scope="col" className="px-4 py-3">
                    Публикация
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.data.map((data, index) => (
                  <PreviewPost
                    name={data.title}
                    id={data.id}
                    published={data.is_published}
                    key={data.id} />
                ))}


              </tbody>
            </table>
          </div>
          <Pagination />
        </div>
      </div>
    </section>
  )
}