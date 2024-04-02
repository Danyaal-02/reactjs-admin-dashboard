// Navbar.js
import '../styles/navbarStyles.css'; 
import { IoNotificationsOutline } from 'react-icons/io5'; 

function Navbar() {
    return (
        <div className="navbar">
            <div className="logo"><img src="https://cdn.animaapp.com/projects/6255ae06d078078d3e9c7650/releases/629f3c4744dea69859d62478/img/frame@2x.png" alt="Your logo" /></div>
            <input type="text" placeholder="Search" />
            <div className="notification">
                <IoNotificationsOutline />
            </div>
            <div className="user-info">
                <div className="username">Matt Appleyard</div>
                <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQI33N4pEvToz8b4VLoCW_hDhdhhDOfwqFwlcsHefYtvZK_9RN4" alt="Profile" />
            </div>
        </div>
    );
}

export default Navbar;
