import { useEffect, useState, useRef } from 'react';

import Dropdown from '../Dropdown/Dropdown';

import './profile.css';

const Profile = () => {
    const [isToggled, setToggle] = useState(false);
    const dropdownRef = useRef();

    useEffect(() => {
        const toggleMenuHandler = (e) => {
            if (dropdownRef.current.contains(e.target)) {
                return;
            }

            setToggle(false);
        }

        document.addEventListener('mousedown', toggleMenuHandler);

        return (() => {
            document.removeEventListener('mousedown', toggleMenuHandler);
        });
    });

    const profileClickHandler = () => {
        setToggle(!isToggled);
    };

    return (
        <div className="side-attr" ref={dropdownRef}>
            <div className="profile" onClick={profileClickHandler}>
                <img className="profile-img" src="https://cdn-icons-png.flaticon.com/512/3237/3237472.png" alt="" />
            </div>
            <Dropdown isToggled={isToggled} />
        </div>
    );
};

export default Profile;