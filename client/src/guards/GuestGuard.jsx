import { Navigate, Outlet } from "react-router";
import { useContext } from "react";
import { UserContext } from "../contexts/userContext";

const GuestGuard = () => {
    const { accessToken } = useContext(UserContext);

    if (accessToken) {
        return <Navigate to={'/'} />;
    }

    return <Outlet />;
};

export default GuestGuard;