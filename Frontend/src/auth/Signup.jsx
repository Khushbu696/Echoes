import { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Input } from "@chakra-ui/react";
import { Toaster, toaster } from "@/components/ui/toaster";
import { PasswordInput } from "@/components/ui/password-input";
import axios from "axios";
import './Signup.css';

const Signup = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        userName: "",
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async () => {
        const { fullName, userName, email, password } = formData;

        // Validation: Check if fields are empty
        if (!fullName || !userName || !email || !password) {
            toaster.error({
                title: "Error",
                description: "All fields are required!",
            });
            return;
        }

        try {
            const response = await axios.post("http://localhost:5000/api/users/register", {
                fullName,  // Corrected field name
                userName,  // Corrected field name
                email,
                password,
            });

            toaster.success({
                title: "Success",
                description: response.data.message || "Account created successfully!",
            });

            // Optionally, redirect to Sign In page after signup
            setTimeout(() => {
                window.location.href = "/signin";
            }, 2000);

        } catch (error) {
            toaster.error({
                title: "Signup Failed",
                description: error.response?.data?.message || "Something went wrong",
            });
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
                        name="userName"
                        value={formData.userName}
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

                    <Button colorPalette="green" id="btn" onClick={handleSubmit}>
                        Sign Up
                    </Button>

                    <div id='option'>
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
