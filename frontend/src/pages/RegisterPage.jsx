import { useState } from "react";
import { registerUser } from "../api/auth";

function RegisterPage() {
    const [name, setName] = useState("");
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
            const data = await registerUser({
                name,
                email,
                password
            });

            console.log(data);

            setMessage("Registration successful");

        } catch (error) {
            setMessage(error.message);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Register</h2>

            <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <input
                type="email"
                placeholder="Enter your email"
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
                Register
            </button>

            <p>{message}</p>
        </form>
    );
}

export default RegisterPage;