import { Toaster } from 'react-hot-toast'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import '../tailwind.css'

import { Login } from './pages/Login'
import { UserList } from './pages/UserList'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Login />,
    },
    {
        path: '/users',
        element: <UserList />,
    },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <>
        <RouterProvider router={router} />
        <Toaster />
    </>
)
