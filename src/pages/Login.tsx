import { useFormik } from 'formik'

import { FaUser } from 'react-icons/fa'
import { IoKeySharp } from 'react-icons/io5'
import vendemmiaLogo from '../assets/vendemmiaLogo2.png'

import { Button } from '../components/Button'
import { Input } from '../components/Input'

export const Login = () => {
    const formik = useFormik({
        initialValues: {
            userLogin: '',
            userPassword: '',
        },
        onSubmit: (values) => console.log(values),
    })

    return (
        <form onSubmit={formik.handleSubmit}>
            <div className="bg-gradient-to-r from-indigo-800 via-purple-600 to-pink-800 h-screen">
                <div className="flex justify-center items-center w-full h-full">
                    <div className="flex flex-col gap-2 items-center justify-between bg-white rounded-md sm:w-3/4 md:w-2/4 xl:w-1/4  h-2/4 p-8">
                        <img
                            className="w-80"
                            src={vendemmiaLogo}
                            alt="Logo da empresa"
                        />
                        <div className="flex flex-col gap-2 w-full mt-4">
                            <label
                                htmlFor="userLogin"
                                className="font-bold text-purple-900 cursor-pointer"
                            >
                                Usuário
                            </label>
                            <Input
                                name="userLogin"
                                value={formik.values.userLogin}
                                type="text"
                                onChange={formik.handleChange}
                                id="userLogin"
                                placeholder="Digite o usuário"
                                icon={
                                    <FaUser className="text-pink-800 font-bold" />
                                }
                            />
                            <label
                                htmlFor="userPassword"
                                className="font-bold text-purple-900 cursor-pointer"
                            >
                                Senha
                            </label>
                            <Input
                                name="userPassword"
                                value={formik.values.userPassword}
                                type="password"
                                onChange={formik.handleChange}
                                id="userPassword"
                                placeholder="Digite a senha"
                                icon={
                                    <IoKeySharp className="text-pink-800 font-bold" />
                                }
                            />
                        </div>

                        <Button name="Entrar" type="submit" />
                    </div>
                </div>
            </div>
        </form>
    )
}
