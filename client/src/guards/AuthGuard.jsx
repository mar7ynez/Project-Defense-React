import { Navigate, Outlet } from 'react-router';
import { useContext } from "react";
import { UserContext } from "../contexts/userContext";

const AuthGuard = () => {
    const { accessToken } = useContext(UserContext);

    if (!accessToken) {
        return <Navigate to={'/login'} />
    }

    return <Outlet />
};

export default AuthGuard;