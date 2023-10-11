import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom"
import { AuthRoutes, AuthRouter } from "../auth/routes";
import { JournalRoutes, JournalRouter } from "../journal/routes";

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
    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}
