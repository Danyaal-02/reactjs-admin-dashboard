import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import GridContainer from './components/GridContainer';

function Dashboard() {
  return (
        <>
            {/* Navbar */}
            <Navbar />
            {/* Sidebar */}
            <div className="app-container">
              <Sidebar />
              <GridContainer />
            </div>
        </>
  )
}

export default Dashboard