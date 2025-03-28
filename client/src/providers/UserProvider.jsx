import { UserContext } from "../contexts/userContext";
import { useLocalStorage } from "../hooks/useLocalStorage"

const UserProvider = ({ children }) => {
    const [userData, setUserData] = useLocalStorage({});

    const authHandler = (userData) => {
        setUserData(userData);
    };

    const logoutHandler = () => {
        setUserData(null);
    }

    return (
        <UserContext.Provider value={{ ...userData, authHandler, logoutHandler }}>
            {children}
        </UserContext.Provider>
    );
}

export default UserProvider;