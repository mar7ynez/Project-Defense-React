
import { useContext, useEffect } from 'react';
import * as requester from '../apiService.js';
import { UserContext } from '../../contexts/userContext.js';

const endpoints = {
    register: 'users/register',
    login: 'users/login',
    updateProfile: (userId) => `users/${userId}`,
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

export const useUpdate = () => {
    const update = (userId, updateData) => {
        return requester.put(endpoints.updateProfile(userId), updateData);
    };

    return {
        update,
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