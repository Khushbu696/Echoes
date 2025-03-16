import "./Signin.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Input } from "@chakra-ui/react";
import { Toaster, toaster } from "@/components/ui/toaster";
import { PasswordInput } from "@/components/ui/password-input";
import { Link } from "react-router-dom";

function Signin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSignin = async () => {
        if (!email || !password) {
            toaster.error({ title: "Please fill in all fields" });
            return;
        }

        try {
            const response = await fetch("http://localhost:5000/api/signin", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (response.ok) {
                toaster.success({ title: "Logged In Successfully" });
                setTimeout(() => navigate("/dashboard"), 1500); // Redirect after success
            } else {
                toaster.error({ title: data.message || "Invalid credentials" });
            }
        } catch (error) {
            toaster.error({ title: "Something went wrong. Try again." });
        }
    };

    return (
        <>
            <Toaster />
            <div className="sign-in">
                <div className="sign-in-form">
                    <h1>Welcome Back</h1>

                    <h3>Email:</h3>
                    <Input
                        placeholder="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <h3>Password</h3>
                    <PasswordInput
                        placeholder="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <Button colorPalette="green" id="btn" onClick={handleSignin}>
                        Sign In
                    </Button>

                    <div id="option">
                        Don't have an account?{" "}
                        <Link to="/signup" style={{ color: "blue", fontWeight: "bold" }}>
                            Sign up
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Signin;
