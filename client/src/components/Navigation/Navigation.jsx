import { Link } from 'react-router';
import { useContext } from 'react';
import { UserContext } from '../../contexts/userContext';

import Profile from '../Profile/Profile';

import './Navigation.css';

const Navigation = () => {
    const { accessToken } = useContext(UserContext);
    const isAuthenticated = accessToken;

    return (
        <nav className="nav">
            <div className="logo">
                <Link to={'/'}>PuzzleHub</Link>
            </div>
            <ul>
                <li className="nav-link"><Link to={'/'}>Home</Link></li>
                <li className="nav-link"><Link to={'/explore'}>Explore</Link></li>

                {isAuthenticated &&
                    <li className="nav-link"><Link to={'/share'}>Share</Link></li>
                }

                <li className="nav-link"><Link to={'/about'}>About</Link></li>
            </ul>

            {!isAuthenticated &&
                <div className="auth-links-wrapper">
                    <div className='auth-link'>
                        <Link to={'/login'}>Sign In</Link>
                    </div>
                    <div className='auth-link'>
                        <Link to={'/register'}>Sign Up</Link>
                    </div>
                </div>
            }

            {isAuthenticated && <Profile />}
        </nav>
    );
};

export default Navigation;