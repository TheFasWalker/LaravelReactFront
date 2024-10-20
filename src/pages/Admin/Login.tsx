import { useState } from "react"
import { BlueButton } from "../../shared/ui/elements/BlueBurron"
import { InputField } from "../../shared/ui/form/InputField"
import { Loader } from "../../shared/ui/elements/Loader"
import { LoaderResult } from "../../shared/ui/elements/LoaderResult"
import { useNavigate } from "react-router-dom"



export const Login =()=>{
    const [loading, setLoading] = useState(false)
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const handleChange = (e: { target: { name: string; value: string } }) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    const submit = async (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        setLoading(true)
        setError("");
        try {
            const response = await fetch ('http://localhost:80/api/sanctum/auth',{
                method:"POST",
                headers:{
                    'Content-Type':"application/json",
                },
                body: JSON.stringify(formData)
            })
            console.log(response)
            if(!response.ok){
                throw new Error('Loging Error')
            }
            const data = await response.json();
            const token = data.data.token;
            localStorage.setItem("bearer_token", token);
            console.log("Token received:", token);
            navigate('/data')
        }catch (error){
            setError(error.message)
        }finally {
            setLoading(false);
        }
        
    }
    return(
    <div className=" flex items-center justify-center h-[100vh] w-[100vw] flex-col">
            <Loader
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
                </form>
            </div>
    )
}