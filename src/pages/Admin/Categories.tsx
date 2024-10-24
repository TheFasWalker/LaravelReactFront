import { useEffect, useState } from "react"
import { CategoryPreview } from "../../shared/admin/categories/CategoryPreview"
import { BlueButton } from "../../shared/ui/elements/BlueBurron"
import { PopupLayout } from "../../shared/ui/layout/PopupLayout"
import { useAppDispatch, useAppSelector } from "../../shared/hooks/redux"
import { Loader } from "../../shared/ui/elements/Loader"
import { createCategoty, deleteCategoryById, getCategories } from "../../entities/store/actions/categoriesAction"
import { Pagination } from "../../shared/admin/HOC/pagination"
import { Category } from "../../entities/types/categories"
import { Field, Form, Formik } from "formik"
import { categorySlice } from "../../entities/store/slices/categorySlice"

export const Categories = () => {
  const dispatch = useAppDispatch()
  const bearerToken = useAppSelector((state) => state.authReduser.token)
  const { isLoading, data, error } = useAppSelector((state) => state.categoriesReduser)
  const [createCategoryPopupState, setCreateCategoryPopupState] = useState(false)
  const [categoryPopupState, setCategoryPopupState] = useState(false)
  const [popUpData, setPopUpData] = useState<Category>()
  const [categoryIdToEdit, setCategoryIdToEdit] = useState()

  const editElement =(e: React.MouseEvent<HTMLDivElement>)=>{
    const dataId = e.currentTarget.getAttribute('data-id');
    setCategoryIdToEdit(dataId)
    data.data.forEach(element => {
      if (element.id == Number(dataId)) {
        return setPopUpData(element)
      }
    })
    setCategoryPopupState(true)
    console.log(dataId)
    console.log('editing =' , dataId)

  }
  // const deleteElement =(e: React.MouseEvent<HTMLDivElement>)=>{
  //   const dataId = e.currentTarget.getAttribute('data-id');

  //   dispatch(deleteCategoryById(bearerToken,dataId))
  //   dispatch(categorySlice.actions.categoriesDeleteById(dataId))
  //   console.log('deдete =' , dataId)

  // }
  const createCategoryFunc=(title:string, token:string)=>{
    dispatch(createCategoty(token, title));
    // dispatch(categorySlice.actions.categoriesCreate())
  }
  useEffect(()=>{

    dispatch(getCategories(bearerToken));
  },[])
return(

<section className="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5">
<PopupLayout
  popupstate={createCategoryPopupState}
  changePopupState={()=>setCreateCategoryPopupState(false)}
    >
      <Formik
      initialValues={{
        title:''
      }}
      onSubmit={()=>console.log('asdfaa')}>
        {({errors,touched})=>(
          <Form className="flex flex-col  gap-3 w-full">
            <h1 className=" text-black font-bold  text-3xl">Создание категории</h1>
            <label>
                <span className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Название Категории
                </span>
                <Field
                  type="text"
                  name="title"
                  placeholder="Заголовк категории"
                  className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${errors.title && touched.title && "bg-red-200 border-red-500"
                    }`}

                />
                {errors.title && touched.title && (
                  <div className="mt-2 text-sm text-red-600 dark:text-red-500">
                    {errors.title}
                  </div>
                )}
                </label>
            <BlueButton title="Сохранить" type="submit" />
          </Form>
        )}

      </Formik>
 

    </PopupLayout>
    <PopupLayout
      popupstate={categoryPopupState}
      changePopupState={() => setCategoryPopupState(false)}>

      
   
      <Formik
      initialValues={{
        title:popUpData?.title
      }}
      onSubmit={()=>console.log('sss')}>
           {({errors,touched})=>(
         <Form className="flex flex-col  gap-3 w-full">
          <h1 className=" text-black font-bold  text-3xl">Редактирование категории</h1>
        <label>
                <span className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Название Категории
                </span>
                <Field
                  type="text"
                  name="title"
                  placeholder="Заголовк категории"
                  className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${errors.title && touched.title && "bg-red-200 border-red-500"
                    }`}

                />
                {errors.title && touched.title && (
                  <div className="mt-2 text-sm text-red-600 dark:text-red-500">
                    {errors.title}
                  </div>
                )}
                </label>
            <BlueButton title="Сохранить" type="submit" />

        </Form>
        )}

      </Formik>
      
    </PopupLayout>
  <div className="mx-auto max-w-screen-xl px-4 lg:px-12 relative">
    Категории
    <Loader
    loading={isLoading}
  />
    <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
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
          <BlueButton onClick={()=>setCreateCategoryPopupState(true)} title="+ Add Item" />

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
                <span className="sr-only">Actions</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {data.data.map((elem)=>(
              <CategoryPreview
              key={elem.id}
              name={elem.title}
                id={elem.id}
                edit={editElement}
                deleteEl={()=>{
                  dispatch(deleteCategoryById(bearerToken, elem.id))
                  dispatch(categorySlice.actions.categoriesDeleteById(elem.id))
                  console.log(data)
                }}
              />
            ))}

          </tbody>
        </table>
      </div>
<Pagination/>
    </div>
  </div>
</section>

)
}