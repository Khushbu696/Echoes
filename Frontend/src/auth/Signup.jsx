import { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Input } from "@chakra-ui/react";
import { Toaster, toaster } from "@/components/ui/toaster";
import { PasswordInput } from "@/components/ui/password-input";
import axios from "axios";
import "./Signup.css";

const Signup = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        username: "",
        email: "",
        password: "",
    });

    const [loading, setLoading] = useState(false); // New state for loading

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async () => {
        const { fullName, username, email, password } = formData;

        // Validation: Check if fields are empty
        if (!fullName || !username || !email || !password) {
            toaster.error({
                title: "Error",
                description: "All fields are required!",
            });
            return;
        }

        try {
            setLoading(true); // Show loading state
            const response = await axios.post("http://localhost:5000/signup", {
                fullName,
                username,
                email,
                password,
            });

            toaster.success({
                title: "Success",
                description: response.data.message || "Account created successfully!",
            });

            setTimeout(() => {
                window.location.href = "/dashboard"; // Redirect after successful signup
            }, 2000);
        } catch (error) {
            toaster.error({
                title: "Signup Failed",
                description: error.response?.data?.error || "Something went wrong",
            });
        } finally {
            setLoading(false); // Stop loading state
        }
    };

    return (
        <>
            <Toaster />
            <div className="sign-up">
                <div className="sign-up-form">
                    <h1>Create Account</h1>

                    <h3>Full Name:</h3>
                    <Input
                        placeholder="John Doe"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                    />

                    <h3>User Name:</h3>
                    <Input
                        placeholder="johndoe"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                    />

                    <h3>Email:</h3>
                    <Input
                        placeholder="john@example.com"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                    />

                    <h3>Password:</h3>
                    <PasswordInput
                        placeholder="Password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                    />

                    <Button colorPalette="green" id="btn" onClick={handleSubmit} isLoading={loading}>
                        {loading ? "Signing Up..." : "Sign Up"}
                    </Button>

                    <div id="option">
                        Already have an account?{" "}
                        <Link to="/signin" style={{ color: "blue", fontWeight: "bold" }}>
                            Sign in
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Signup;
