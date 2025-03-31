import { Link } from 'react-router';
import { useForm } from '../../hooks/useForm';
import { useFormValidation } from '../../hooks/useFormValidation';
import * as authFromConsts from '../../constants/authFormConsts';

import FormError from '../FormError/FormError';

import './authForm.css';

export const AuthForm = ({ isLogin, formAction, isPending }) => {
    const { initialFormData, initialFormErrors, customErrors } = authFromConsts;

    const { validate } = useFormValidation(customErrors);
    const { formData, touched, formErrors, changeHandler, blurHandler, isFormValid } = useForm(initialFormData, initialFormErrors, validate);

    return (
        <div className="form-wrapper">
            <form className='form' action={formAction}>
                <h2>{isLogin ? 'Sign In' : 'Sign Up'}</h2>
                <div>
                    <label htmlFor="email">Email</label>
                    <FormError touched={touched} formErrors={formErrors} name='email' />
                    <input type="text" name='email' placeholder='Email' id='email' defaultValue={formData.email} onChange={changeHandler} onBlur={blurHandler} />
                </div>
                {!isLogin &&
                    <div>
                        <label htmlFor="username">Username</label>
                        <FormError touched={touched} formErrors={formErrors} name='username' />
                        <input type="text" name='username' placeholder='Username' id='username' defaultValue={formData.username} onChange={changeHandler} onBlur={blurHandler} />
                    </div>
                }
                <div>
                    <label htmlFor="password">Password</label>
                    <FormError touched={touched} formErrors={formErrors} name='password' />
                    <input type="password" name='password' placeholder='Password' id='password' defaultValue={formData.password} onChange={changeHandler} onBlur={blurHandler} />
                </div>
                {!isLogin &&
                    <div>
                        <label htmlFor="rePassword">Confirm Password</label>
                        <FormError touched={touched} formErrors={formErrors} name='rePassword' />
                        <input type="password" name='rePassword' placeholder='Confirm Password' id='rePassword' defaultValue={formData.rePassword} onChange={changeHandler} onBlur={blurHandler} />
                    </div>
                }
                <div className="btn-wrapper">
                    <button className={!isFormValid(isLogin) || isPending ? 'disabled' : ''} type='submit'>{isLogin ? 'Sign In' : 'Sign Up'}</button>
                </div>
                <div className='form-switch'>
                    <p>{isLogin ? "Don't have an account?" : "Already have an account?"}</p>
                    <Link to={isLogin ? '/register' : '/login'}>{isLogin ? 'Sign Up' : 'Sign In'}</Link>
                </div>
            </form >
        </div>
    );
};

export default AuthForm;