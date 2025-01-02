import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "./layouts/HomeLayout";
import AuthLayout from "./layouts/AuthLayout";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";

export const router = createBrowserRouter([
    {
        path: '',
        element: <HomeLayout/>,
        children: [
            {
                path: 'home',
                element: <HomePage/>
            },
            {
                path: 'tweets',
                element: <HomePage/>
            },
            {
                path: 'videos',
                element: <HomePage/>
            },
            {
                path: 'documents',
                element: <HomePage/>
            },
            {
                path: 'links',
                element: <HomePage/>
            },
            {
                path: 'tags',
                element: <HomePage/>
            }
        ]
    },
    {
        path: '',
        element: <AuthLayout/>,
        children: [
            {
                path: 'register',
                element: <RegisterPage/>
            },
            {
                path: 'login',
                element: <LoginPage/>
            }
        ]
    }
])