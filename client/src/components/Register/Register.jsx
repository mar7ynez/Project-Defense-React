import { useActionState, useContext } from 'react';
import { useRegister } from '../../services/hooks/userApi';
import { UserContext } from '../../contexts/userContext';

import AuthForm from '../AuthForm/AuthForm';

export const Register = () => {
    const { register } = useRegister();
    const { authHandler } = useContext(UserContext);

    const registerHandler = async (prevState, formData) => {
        const userData = Object.fromEntries(formData);

        if (Object.values(userData).some(value => !value)) {
            return;
        }

        if (userData.password.length < 6 || userData.password !== userData.rePassword) {
            return;
        }

        try {
            const registeredUser = await register(userData);

            if (!registeredUser) {
                return;
            }

            authHandler(registeredUser);
        } catch (error) {
            alert(error.message);
        }
    }

    const [, loginAction, isPending] = useActionState(registerHandler)

    return (
        <AuthForm isLogin={false} formAction={loginAction} isPending={isPending} />
    );
};

export default Register;