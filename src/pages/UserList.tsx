import axios from 'axios'
import { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'
import { BsThreeDotsVertical } from 'react-icons/bs'

import vendemmiaLogo from '../assets/vendemmiaLogo.png'
import { Button } from '../components/Button'
import { Loading } from '../components/Loading'
import { Modal } from '../components/Modal'
import { UserProps } from '../interfaces/user'

export const UserList = () => {
    const [userList, setUserList] = useState<UserProps[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [openModal, setOpenModal] = useState(false)
    const [userId, setUserId] = useState('')

    const handleChangeModal = (id?: string) => {
        if (id) {
            setUserId(id)
        }
        setOpenModal(!openModal)
    }

    const getListUser = () => {
        axios
            .get('https://63a1c51eba35b96522e7a1b1.mockapi.io/vdm/Users')
            .then(function (response) {
                setUserList(response.data)
            })
            .catch(function () {
                toast.error('Algo deu errado!')
            })
            .finally(() => {
                setIsLoading(false)
            })
    }

    useEffect(() => {
        getListUser()
    }, [])

    return (
        <div>
            <Modal
                openModal={openModal}
                changeModal={handleChangeModal}
                id={userId}
            />
            <div className="p-4 bg-purple-900 h-full min-h-screen">
                <div className="flex gap-4 items-center justify-between bg-white w-full p-3 rounded-md mb-4">
                    <div className="w-24">
                        <img
                            className="h-10"
                            src={vendemmiaLogo}
                            alt="Logo vendemmia"
                        />
                    </div>
                    <label className="font-bold text-lg text-purple-800">
                        Lista de usuários
                    </label>
                    <Button className="w-24" name="Sair" type="button" />
                </div>
                {isLoading ? (
                    <Loading />
                ) : (
                    <div className=" grid grid-cols-4 gap-4">
                        {userList.map((user) => (
                            <div className="flex items-center justify-between gap-4 bg-white-100 rounded-md w-full p-4">
                                <img
                                    className="rounded-lg border border-purple-800 h-20"
                                    src={user.avatar}
                                    alt="avatar do usuário"
                                />
                                <div className="flex flex-col items-center">
                                    <label className="font-bold text-purple-800">
                                        {user.name}
                                    </label>
                                </div>
                                <BsThreeDotsVertical
                                    onClick={() => handleChangeModal(user.id)}
                                    size={20}
                                    className="cursor-pointer"
                                />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}
