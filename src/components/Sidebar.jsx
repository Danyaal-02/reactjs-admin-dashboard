import { FaChartBar, FaClipboardList, FaUser, FaCog, FaLifeRing, FaComments, FaQuestionCircle } from 'react-icons/fa';
import '../styles/sidebarStyles.css'

function Sidebar() {
    return (
        <div className="sidebar">
            <ul>
                <li><FaChartBar /> Dashboard</li>
                <li><FaClipboardList /> Orders</li>
                <li><FaUser /> Account</li>
                <li><FaCog /> Settings</li>
                <li>
                    <FaLifeRing /> Support
                    <ul className="nested">
                        <li><FaComments /> Chat</li>
                        <li><FaQuestionCircle /> FAQ</li>
                    </ul>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;
