import { Link } from "react-router";

import './dropdown.css';

const Dropdown = ({ isToggled }) => {
    return (
        <div className={`dropdown-menu ${isToggled && 'show-dropdown'}`}>
            <div className="dropdown-user">
                <h3>@Username</h3>
            </div>
            <div className="dropdown-links-wrapper">
                <Link to={'/my-puzzles'} className="dropdown-link">
                    <i className="fa-solid fa-user"></i>
                    <p>My Profile</p>
                </Link>
                <Link to={'/profile'} className="dropdown-link">
                    <i className="fa-solid fa-user-pen"></i>
                    <p>Edit Profile</p>
                </Link>
                <Link to={'/logout'} className="dropdown-link">
                    <i className="fa-solid fa-right-from-bracket"></i>
                    <p>Logout</p>
                </Link>
            </div>
        </div >
    );
};

export default Dropdown;