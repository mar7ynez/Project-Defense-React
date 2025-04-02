
import { useContext, useEffect, useState } from 'react';
import * as requester from '../apiService.js';
import { UserContext } from '../../contexts/userContext.js';

const endpoints = {
    register: 'users/register',
    login: 'users/login',
    getUser: (userId) => `users/${userId}/profile`,
    updateProfile: (userId) => `users/${userId}`,
    updateAvatar: (userId) => `users/${userId}/image`,
    logout: 'users/logout'
};

export const useRegister = () => {
    const register = (userData) => {
        return requester.post(endpoints.register, userData);
    };

    return {
        register,
    };
};

export const useLogin = () => {
    const login = (userData) => {
        return requester.post(endpoints.login, userData);
    };

    return {
        login,
    };
};

export const useUser = (userId) => {
    const [user, setUser] = useState({});

    useEffect(() => {
        requester.get(endpoints.getUser(userId))
            .then(user => {
                setUser(user);
            })
            .catch(error => console.log(error))
    }, [userId]);

    return {
        user,
    };
}

export const useUpdate = () => {
    const update = (userId, updateData) => {
        return requester.put(endpoints.updateProfile(userId), updateData);
    };

    const updateAvatar = (userId, newAvatar) => {
        return requester.put(endpoints.updateAvatar(userId), newAvatar);
    };

    return {
        update,
        updateAvatar,
    };
};

export const useLogout = () => {
    const { logoutHandler, accessToken } = useContext(UserContext);

    useEffect(() => {
        requester.get(endpoints.logout, null)
            .finally(logoutHandler);
    });

    return {
        isLoggedOut: !!accessToken
    };
}; 