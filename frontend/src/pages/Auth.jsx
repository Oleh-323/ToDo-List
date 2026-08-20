import RegisterPage from "./RegisterPage";
import LoginPage from "./LoginPage";
import "../App.css";

function Auth() {
    return (
        <div className="auth-page">

            <div className="auth-card">
                <RegisterPage />
            </div>

            <div className="auth-card">
                <LoginPage />
            </div>

        </div>
    );
}

export default Auth;