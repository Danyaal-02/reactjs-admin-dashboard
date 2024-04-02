// Login.jsx
import { FaUser, FaLock } from "react-icons/fa6";
import "./styles/loginStyles.css"; // Import the CSS file

function Login({ onLoginSuccess }) {
    // Function to handle login button click
    const handleLogin = () => {
        // Perform any login logic here (e.g., validation, authentication)
        // For simplicity, directly invoke onLoginSuccess callback
        onLoginSuccess();
    };

    return (
        <>
            <section className="login-container">
                <div className="login-input-container">
                    <span className="login-input">
                        <FaUser className="icon" />
                        <div className="input"><input placeholder="Username" type="text" /></div>
                    </span>
                    <span className="login-input">
                        <FaLock className="icon" />
                        <div className="input"><input placeholder="Password" type="text" /></div>
                    </span>
                    <div className="checkbox-container">
                        <div className="checkbox">
                            <input
                                id="remember"
                                aria-describedby="remember"
                                type="checkbox"
                                className="checkbox"
                                required
                            />
                        </div>
                        <label htmlFor="remember" className="forgot-password">
                            Remember me
                        </label>
                    </div>
                    <a href="#" className="forgot-password">
                        Forgot password?
                    </a>
                    <button className="login-button" onClick={handleLogin}>Login</button>
                    <span>OR <a href="#" className="forgot-password">register Now!</a></span>
                </div>
                <div>
                    <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSkI-ywEO6rGg1Pdn8RDGeev4N2ufh9FEsalLGY7m_qI5_heIkC" alt="icon image" />
                </div>
            </section>
        </>
    );
}


export default Login;
