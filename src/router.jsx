import { createBrowserRouter, Navigate } from 'react-router-dom'
import Login from './views/Login'
import Signup from './views/Signup'
import Users from './views/Users'
import NotFound from './views/NotFound'
import DefaultLayout from './layouts/DefaultLayout'
import GuestLayout from './layouts/GuestLayout'

const router = createBrowserRouter([
    {
        path: '/',
        element: <DefaultLayout />,
        children: [
            {
                path: '/',
                element: <Navigate to="/users" />
            },
            {
                path: '/users',
                element: <Users />
            }
        ]
    },
    {
        path: '/',
        element: <GuestLayout />,
        children: [
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signup',
                element: <Signup />
            }
        ]
    },
    {
        path: '*', // catch-all route
        element: <NotFound />
    }
])

export default router