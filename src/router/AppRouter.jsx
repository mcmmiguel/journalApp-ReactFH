import { useDispatch, useSelector } from 'react-redux'
import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom"
import { firebaseAuth } from '../firebase/config';
import { AuthRoutes, AuthRouter } from "../auth/routes";
import { JournalRoutes, JournalRouter } from "../journal/routes";
import { CheckingAuth } from '../ui/components/CheckingAuth';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { login, logout } from '../store/auth';


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

    const { status } = useSelector(state => state.auth);

    const dispatch = useDispatch();

    useEffect(() => {

        onAuthStateChanged(firebaseAuth, async (user) => {
            if (!user) return dispatch(logout());

            const { email, displayName, uid, photoURL } = user;

            dispatch(login({ email, displayName, uid, photoURL }));
        })


    }, [])

    if (status === 'checking') {
        return <CheckingAuth />
    }

    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}