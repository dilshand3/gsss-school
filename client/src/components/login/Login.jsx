"use client";
import React, { useState } from "react";
import "./Login.css";
import useAuth from "@/store/userAuth";
import useApi from "@/store/ApiAuth";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
    const { closeLogin } = useAuth();
    const { login } = useApi();

    const [showPassword, setShowPassword] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState({ username: "", password: "", general: "" });

    const handleLogin = async (e) => {
        e.preventDefault();
        setError({ username: "", password: "", general: "" });

        try {
            const res = await login(username, password);

            if (res?.success) {
                closeLogin();
                toast.success("User logged in successfully! 🎉");
            } else {
                if (res?.message === "user didn't exist") {
                    setError((prev) => ({ ...prev, username: "User not found." }));
                } else if (res?.message === "Invalid password") {
                    setError((prev) => ({ ...prev, password: "Incorrect password." }));
                } else {
                    setError((prev) => ({ ...prev, general: res?.message || "Server didn't responde" }));
                }
            }
        } catch (error) {
            console.error("Login error:", error);
            setError((prev) => ({ ...prev, general: "Something went wrong. Please try again." }));
        }
    };

    return (
        <div className="login-popup">
            <Toaster position="top-center" reverseOrder={false} />

            <form className="login-popup-container" onSubmit={handleLogin}>
                <div className="login-popup-title">
                    <h2>Login</h2>
                    <span className="material-symbols-outlined cross" onClick={closeLogin}>
                        close
                    </span>
                </div>

                <div className="login-popup-inputs">
                    <div className="input-group">
                        <input
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className={error.username ? "input-error" : ""}
                            required
                        />
                        {error.username && <label className="error-message">{error.username}</label>}
                    </div>

                    <div className="input-group">
                        <div className="password-container">
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className={error.password ? "input-error" : ""}
                                required
                            />
                            <span
                                className="material-symbols-outlined toggle-password"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? "visibility_off" : "visibility"}
                            </span>
                        </div>
                        {error.password && <label className="error-message">{error.password}</label>}
                    </div>
                </div>

                {error.general && <p className="error-message general-error">{error.general}</p>}

                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
