import { createBrowserRouter } from 'react-router-dom'
import Login from './views/Login'

const router = createBrowserRouter([
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/signup',
        element: <Signup />
    },
    {
        path: '/users',
        element: <Users />
    },
    {
        path: '*', // catch-all route
        element: <NotFound />
    }
])

export default router