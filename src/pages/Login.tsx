import { Button } from '../components/Button'
import { Input } from '../components/Input'

export const Login = () => {
    return (
        <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-screen">
            <div className="flex justify-center items-center w-full h-full">
                <div className="bg-white rounded-md p-24">
                    <Input
                        name="userLogin"
                        value="Gui"
                        id="userLogin"
                        placeholder="Digite o user"
                    />
                    <Button name="Entrar" type="submit" />
                </div>
            </div>
        </div>
    )
}
