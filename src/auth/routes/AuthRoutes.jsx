import { Navigate } from "react-router-dom";
import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";

export const AuthRoutes = [
    {
        index: true,
        path: 'login',
        element: <LoginPage />
    },
    {
        path: 'register',
        element: <RegisterPage />
    },
    {
        path: '/auth/*',
        element: <Navigate to={'/auth/login'} />
    }
]
