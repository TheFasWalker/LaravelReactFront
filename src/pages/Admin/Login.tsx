import { BlueButton } from "../../shared/ui/elements/BlueBurron";
import { Loader } from "../../shared/ui/elements/Loader";
import { Field, Form, Formik } from "formik";
import { validateField } from "../../shared/helpers/validation";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../shared/hooks/redux";
import { autorisation } from "../../entities/store/actions/autorisationAction";
import { useEffect } from "react";


export const Login = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate();
  
 const {isLoading,token} = useAppSelector((state)=>state.authReduser)
 useEffect(() => {
  if (token) {
    navigate('/data/'); 
  }
}, [token, navigate]);

  const logger = async (email: string, password: string) => {
   await dispatch(autorisation(email,password))
    const redirectPath = (location.pathname as any)?.from?.pathname || '/data/'; 
    navigate(redirectPath);
  };
  return (
    <div className=" flex items-center justify-center h-[100vh] w-[100vw] flex-col">
      <Loader loading={isLoading} />
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={(values) => {
          logger("admin@admin.admin", "password");
          // logger(values.email, values.password)
        }}
      >
        {({ errors, touched }) => (
          <Form className="flex flex-col  gap-3 w-64">
            <h3 className="mb-3 text-2xl font-bold text-gray-900 dark:text-white text-center">
              Форма входа
            </h3>
            <label>
              <span className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Login
              </span>
              <Field
                type="email"
                name="email"
                placeholder="email.email@email"
                className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
                  errors.email && touched.email && "bg-red-200 border-red-500"
                }`}
                validate={validateField}
              />
              {errors.email && touched.email && (
                <div className="mt-2 text-sm text-red-600 dark:text-red-500">
                  {errors.email}
                </div>
              )}
            </label>
            <label>
              <span className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Password
              </span>
              <Field
                type="password"
                name="password"
                placeholder="*******"
                className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
                  errors.email && touched.email && "bg-red-200 border-red-500"
                }`}
                validate={validateField}
              />
              {errors.password && touched.password && (
                <div className="mt-2 text-sm text-red-600 dark:text-red-500">
                  {errors.password}
                </div>
              )}
            </label>
            <BlueButton title="Войти" type="submit" />
          </Form>
        )}
      </Formik>
    </div>
  );
};
