import { useEffect, useState, useRef, useContext } from 'react';
import { UserContext } from '../../contexts/userContext';

import Dropdown from '../Dropdown/Dropdown';

import defaultImage from '/default-profile.png';
import './profile.css';

const Profile = () => {
    const { image } = useContext(UserContext);
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
                <img className="profile-img" src={image || defaultImage} alt="" />
            </div>
            <Dropdown isToggled={isToggled} />
        </div>
    );
};

export default Profile;