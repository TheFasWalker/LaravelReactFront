
import { BlueButton } from "../../shared/ui/elements/BlueBurron";
import { Loader } from "../../shared/ui/elements/Loader";
import { Field, Form, Formik } from "formik";
import { validateField } from "../../shared/helpers/validation";
import { useState } from "react";

export const Login = () => {
    const [loading, setLoaing] = useState(false);
    const logger = (email: string, password: string) => {
        console.log('loggin')
        console.log(email)
    }
  return (
      <div className=" flex items-center justify-center h-[100vh] w-[100vw] flex-col">
           <Loader loading={loading} />
      <Formik
        initialValues={{
          email: "",
          password: "",
              }}
        onSubmit={(values) => {
            // console.log(values);
            logger('admin@admin.admin','password')
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
                {" "}
                Login
              </span>
              <Field
                type="email"
                name="email"
                placeholder="email.email@email"
                className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${errors.email && touched.email && 'bg-red-200 border-red-500'}`}
                validate={validateField}
              />
              {errors.email && touched.email && <div className="mt-2 text-sm text-red-600 dark:text-red-500">{errors.email}</div>}
            </label>
            <label>
              <span className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Password
              </span>
              <Field
                type="password"
                name="password"
                placeholder="*******"
                className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${errors.email && touched.email &&  'bg-red-200 border-red-500'}`}
                validate={validateField}
              />
              {errors.password && touched.password && (
                <div className="mt-2 text-sm text-red-600 dark:text-red-500">{errors.password}</div>
              )}
                      </label>
                      <BlueButton title="Войти" />
          </Form>
        )}
      </Formik>
      {/* <Loader
                loading={loading} />
                <LoaderResult />
                <h3 className="mb-3 text-2xl font-bold text-gray-900 dark:text-white text-center">
                    Форма входа
                </h3>
                {error && <p className="text-red-500">{error}</p>}
                <form action="#" className="flex flex-col  gap-3 w-64" onSubmit={submit}>
                    <InputField
                        title="Ваш email"
                        type="email"
                        name="email"
                        placeholder="Ваш email"
                        onChange={handleChange} />
                    <InputField
                        title="Ваш Пароль"
                        type="password"
                        name="password"
                        placeholder="*********"
                        onChange={handleChange} />
                    <BlueButton title="Войти" />
                </form> */}
    </div>
  );
};
