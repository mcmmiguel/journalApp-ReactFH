import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom"
import { AuthRoutes, AuthRouter } from "../auth/routes";
import { JournalRoutes, JournalRouter } from "../journal/routes";
import { CheckingAuth } from '../ui/components/CheckingAuth';
import { useCheckAuth } from '../hooks';


const router = createBrowserRouter([
    {
        path: '/auth/*',
        element: <AuthRouter />,
        children: AuthRoutes,
    },
    {
        path: '/',
        element: <JournalRouter />,
        children: JournalRoutes,
    },
    {
        path: '/*',
        element: <Navigate to={'/'} />
    },
]);

export const AppRouter = () => {

    const { status } = useCheckAuth()

    if (status === 'checking') {
        return <CheckingAuth />
    }

    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}