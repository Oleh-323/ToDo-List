import { useState } from "react";
import { loginUser } from "../api/auth";

function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
        return emailRegex.test(email);
    };

    const validatePassword = (password) => {
        const passwordRegex =
            /^(?=.*[A-Za-z])(?=.*\d).{6,}$/;
    
        return passwordRegex.test(password);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!validateEmail(email)) {
            setMessage("Invalid email");
            return;
        }
        if (!validatePassword(password)) {
            setMessage("Password must be at least 6 characters and one letter");
            return;
        }

        try {
            const data = await loginUser({
                email,
                password
            });

            localStorage.setItem("token", data.token);

            setMessage("Login successful");

            console.log(data);

            window.location.reload();

        } catch (error) {
            setMessage(error.message);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>

            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <div className="password-field">
                <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button
                    type="button"
                    className="show-password"
                    onClick={() => setShowPassword(!showPassword)}
                >
                    {showPassword ? "Hide" : "Show"}
                </button>
            </div>

            <button type="submit">
                Login
            </button>

            <p>{message}</p>
        </form>
    );
}

export default LoginPage;