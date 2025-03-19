import { Link } from 'react-router';
import './Navigation.css';

const Navigation = () => {
    return (
        <>
            <nav className="nav">
                <div className="logo">
                    <Link to={'/'}>uniqueone</Link>
                </div>
                <ul>
                    <li className="nav-link"><Link to={'/'}>Home</Link></li>
                    <li className="nav-link"><Link to={'/explore'}>Explore</Link></li>
                    <li className="nav-link"><Link to={'/login'}>Login</Link></li>
                    <li className="nav-link"><Link to={'/register'}>Register</Link></li>
                    <li className="nav-link"><Link to={'/about'}>About</Link></li>
                </ul>
                <div className="side-attr">
                    <img className="profile" src="https://cdn-icons-png.flaticon.com/512/3237/3237472.png" alt="" />
                </div>
            </nav>
        </>
    );
};

export default Navigation;