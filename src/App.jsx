// App.js
import { useState } from 'react';
import './App.css';
import Dashboard from './Dashboard.jsx';
import Login from './Login.jsx';

function App() {
    // State to manage authentication status
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // Function to handle successful login
    const handleLoginSuccess = () => {
        setIsLoggedIn(true);
    };

    return (
        <div className="app">
            {/* Conditional rendering based on authentication status */}
            {isLoggedIn ? (
                <Dashboard />
            ) : (
                <Login onLoginSuccess={handleLoginSuccess} />
            )}
        </div>
    );
}

export default App;
