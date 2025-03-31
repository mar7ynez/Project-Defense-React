import { useState } from 'react';

export const useLocalStorage = (initialState) => {
    const [state, setState] = useState(() => {
        const userData = localStorage.getItem('userData');

        if (!userData) {
            return typeof initialState === 'function' ? initialState() : initialState;
        }

        return JSON.parse(userData);
    });

    const setUserData = (input) => {
        const data = typeof input === 'function' ? input(state) : input;

        localStorage.setItem('userData', JSON.stringify(data));

        setState(data);
    }

    return [
        state,
        setUserData,
    ];
}