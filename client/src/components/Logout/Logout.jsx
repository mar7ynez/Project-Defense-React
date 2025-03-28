import { Navigate } from 'react-router';
import { useLogout } from '../../services/hooks/userApi';

const Logout = () => {
    const { isLoggedOut } = useLogout();

    return isLoggedOut ? <Navigate to={'/'} /> : null;
}

export default Logout;