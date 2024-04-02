import { FaArrowUp } from 'react-icons/fa'; 
import LineChart from '../charts/LineChart';
import '../../styles/Container3-4-5.css'; 

function Container4() {
    return (
        <div className="container3-4-5">
            <div className="left-content">
                <h2 className="chart-title">Chart Title</h2>
                <div className="number">2,643</div>
                <div className="percentage">
                    <span className="arrow-icon">
                        <FaArrowUp />
                    </span>
                    <span>1.10% Since Yesterday</span>
                </div>
            </div>
            <div className="right-content">
                <LineChart />
            </div>
        </div>
    );
}

export default Container4;
