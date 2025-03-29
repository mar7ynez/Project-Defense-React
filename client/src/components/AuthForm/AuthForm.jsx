import { Link } from 'react-router';

import './authForm.css';

export const AuthForm = ({ isLogin, formAction, isPending }) => {
    return (
        <div className="form-wrapper">
            <form className='form' action={formAction}>
                <h2>{isLogin ? 'Sign In' : 'Sign Up'}</h2>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="text" name='email' placeholder='Email' id='email' />
                </div>
                {!isLogin &&
                    <div>
                        <label htmlFor="username">Username</label>
                        <input type="text" name='username' placeholder='Username' id='username' />
                    </div>
                }
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name='password' placeholder='Password' id='password' />
                </div>
                {!isLogin &&
                    <div>
                        <label htmlFor="rePassword">Confirm Password</label>
                        <input type="password" name='rePassword' placeholder='Confirm Password' id='rePassword' />
                    </div>
                }
                <div className="btn-wrapper">
                    <button type='submit' disabled={isPending}>{isLogin ? 'Sign In' : 'Sign Up'}</button>
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