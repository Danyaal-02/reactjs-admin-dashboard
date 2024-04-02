import { FaArrowUp } from 'react-icons/fa'; 

import DonutChart from '../charts/DonutChart'; 
import '../../styles/Container7.css';

function Container7() {
    return (
        <div className="container7">
            <div className="increase">
                <h2>Chart Title</h2>
                <span>
                    <FaArrowUp className='arrow-icon'/>
                    1.10% Since Yesterday
                </span>
            </div>
            <DonutChart />
        </div>
    );
}

export default Container7;
