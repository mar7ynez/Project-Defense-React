import { createContext } from "react";

export const UserContext = createContext({
    email: '',
    username: '',
    _id: '',
    about: '',
    accessToken: '',
    authHandler: () => { },
    logoutHandler: () => { }
});