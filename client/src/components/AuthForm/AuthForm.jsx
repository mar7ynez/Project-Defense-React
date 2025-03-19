import { Link } from 'react-router';
import './authForm.css';

export const AuthForm = ({ isLogin }) => {
    return (
        <div className="form-wrapper">
            <form className='form' action="">
                <h2>{isLogin ? 'Sign In' : 'Sign Up'}</h2>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="text" placeholder='Email' id='email' />
                </div>
                {!isLogin &&
                    <div>
                        <label htmlFor="username">Username</label>
                        <input type="text" placeholder='Username' id='username' />
                    </div>
                }
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder='Password' id='password' />
                </div>
                {!isLogin &&
                    <div>
                        <label htmlFor="rePassword">Confirm Password</label>
                        <input type="password" placeholder='Confirm Password' id='rePassword' />
                    </div>
                }
                <div className="btn-wrapper">
                    <button>{isLogin ? 'Sign In' : 'Sign Up'}</button>
                </div>
                <div className='form-switch'>
                    <p>{isLogin ? 'Dont have an account?' : 'Already have an account?'}</p>
                    <Link to={isLogin ? '/register' : '/login'}>{isLogin ? 'Sign Up' : 'Sign In'}</Link>
                </div>
            </form >
        </div>
    );
};

export default AuthForm;