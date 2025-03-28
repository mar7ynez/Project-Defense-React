import { useActionState, useContext } from 'react';
import { useRegister } from '../../services/hooks/userApi';
import { UserContext } from '../../contexts/userContext';

import AuthForm from '../AuthForm/AuthForm';

export const Register = () => {
    const { register } = useRegister();
    const { authHandler } = useContext(UserContext);

    const registerHandler = async (prevState, formData) => {
        try {
            const userData = Object.fromEntries(formData);

            const registeredUser = await register(userData);

            if (!registeredUser) {
                return;
            }

            authHandler(registeredUser);
        } catch (error) {
            alert(error);
        }
    }

    const [, loginAction, isPending] = useActionState(registerHandler)

    return (
        <AuthForm isLogin={false} formAction={loginAction} isPending={isPending} />
    );
};

export default Register;