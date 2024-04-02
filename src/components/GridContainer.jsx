import Container1 from './containers/Container1';
import Container2 from './containers/Container2';
import Container3 from './containers/Container3';
import Container4 from './containers/Container4';
import Container5 from './containers/Container5';
import Container6 from './containers/Container6';
import Container7 from './containers/Container7';
import '../styles/containerStyles.css'

function GridContainer() {
    return (
        <div className="grid-container">
            <div className="grid-item item1"><Container1 /></div>
            <div className="grid-item item2"><Container2 /></div>
            <div className="grid-item item3"><Container3 /></div>
            <div className="grid-item item4"><Container4 /></div>
            <div className="grid-item item5"><Container5 /></div>
            <div className="grid-item item6"><Container6 /></div>
            <div className="grid-item item7"><Container7 /></div>
        </div>
    );
}

export default GridContainer;
