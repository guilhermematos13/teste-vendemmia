import axios from 'axios'
import { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'
import { format } from 'date-fns'

import { FaWindowClose } from 'react-icons/fa'

import { UserProps } from '../interfaces/user'
import { Loading } from './Loading'

interface ModalProps {
    changeModal: () => void
    openModal: boolean
    id: string
}

export const Modal = ({
    openModal,
    changeModal,
    id,
}: ModalProps): JSX.Element | null => {
    if (!openModal) return null

    const [userDetails, setUserDetails] = useState<UserProps>()
    const [isLoading, setIsLoading] = useState(true)

    const getUserDetails = () => {
        axios
            .get(`https://63a1c51eba35b96522e7a1b1.mockapi.io/vdm/Users/${id}`)
            .then(function (response) {
                setUserDetails(response.data)
            })
            .catch(function () {
                changeModal()
                toast.error('Algo deu errado!')
            })
            .finally(() => {
                setIsLoading(false)
            })
    }
    useEffect(() => {
        getUserDetails()
    }, [])
    return (
        <div className="flex justify-center mt-36 fixed w-screen h-screen">
            <div className="bg-purple-900 bg-opacity-95 border-2 border-black rounded-xl p-4 fixed w-1/4 h-auto">
                <FaWindowClose
                    onClick={changeModal}
                    className="text-white cursor-pointer float-right"
                    size={20}
                />
                {isLoading ? (
                    <Loading />
                ) : (
                    userDetails && (
                        <div className="flex flex-col items-center justify-center h-full">
                            <img
                                className="h-auto rounded-xl border border-white"
                                src={userDetails?.avatar}
                            />
                            <p className="text-white font-bold mt-4">
                                {userDetails?.name}
                            </p>
                            <label className="text-white text-lg font-bold mt-2">
                                Acesso criado em:
                            </label>
                            <p className="text-white font-bold">
                                {format(
                                    new Date(userDetails.createdAt),
                                    'dd/MM/yyyy'
                                )}
                            </p>
                        </div>
                    )
                )}
            </div>
        </div>
    )
}
