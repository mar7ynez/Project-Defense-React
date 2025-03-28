import { useActionState, useContext } from 'react';
import { useLogin } from '../../services/hooks/userApi';
import AuthForm from '../AuthForm/AuthForm';
import { UserContext } from '../../contexts/userContext';
import { useNavigate } from 'react-router';

export const Login = () => {
    const navigate = useNavigate();
    const { login } = useLogin();
    const { authHandler } = useContext(UserContext);

    const loginHandler = async (prevState, formData) => {
        const userData = Object.fromEntries(formData);

        try {
            const loggedInUser = await login(userData);

            authHandler(loggedInUser);

            navigate(-1);
        } catch (error) {
            alert(error);
        };
    };

    const [, loginAction, isPending] = useActionState(loginHandler);

    return (
        <AuthForm isLogin={true} formAction={loginAction} isPending={isPending} />
    );
};

export default Login;