import { FaUser } from 'react-icons/fa'
import { IoKeySharp } from 'react-icons/io5'
import vendemmiaLogo from '../assets/vendemmiaLogo2.png'

import { Button } from '../components/Button'
import { Input } from '../components/Input'

export const Login = () => {
    return (
        <div className="bg-gradient-to-r from-indigo-800 via-purple-600 to-pink-800 h-screen">
            <div className="flex justify-center items-center w-full h-full">
                <div className="flex flex-col gap-4 items-center justify-center bg-white rounded-md w-1/4 h-2/5 p-8">
                    <img
                        className="mb-8 w-80"
                        src={vendemmiaLogo}
                        alt="Logo da empresa"
                    />
                    <Input
                        name="userLogin"
                        value="Usuario"
                        id="userLogin"
                        placeholder="Digite o user"
                        icon={<FaUser className="text-pink-800 font-bold" />}
                    />
                    <Input
                        name="userPassword"
                        value="Senha"
                        id="userPassword"
                        placeholder="Digite o user"
                        icon={
                            <IoKeySharp className="text-pink-800 font-bold" />
                        }
                    />
                    <Button className=" " name="Entrar" type="submit" />
                </div>
            </div>
        </div>
    )
}
