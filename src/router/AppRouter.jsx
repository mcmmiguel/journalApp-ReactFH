import { useSelector } from 'react-redux'
import { Navigate } from "react-router-dom"
import { AuthRoutes, AuthRouter } from "../auth/routes";
import { JournalRoutes, JournalRouter } from "../journal/routes";
import { CheckingAuth } from '../ui/components/CheckingAuth';



export const AppRouter = () => {

    const { status } = useSelector(state => state.auth);

    if (status === 'checking') {
        return [
            {
                path: "*",
                element: <CheckingAuth />,
            },
        ];
    } else {
        return [
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
        ];
    }
}
