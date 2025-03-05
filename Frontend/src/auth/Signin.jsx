import './Signin.css'
import { Link } from "react-router-dom"
import { Button, Input } from "@chakra-ui/react"
import { Toaster, toaster } from "@/components/ui/toaster"
import { PasswordInput } from "@/components/ui/password-input"

function Signin() {
    return (
        <>
        <Toaster />
            <div className="sign-in">
                <div className="sign-in-form">
                    <h1>Welcome Back</h1>

                    <h3>Email:</h3>
                    <Input placeholder="email" />

                    <h3>Password</h3>
                    <PasswordInput placeholder="password" />

                    <Button colorPalette='green' id="btn"
                        onClick={() =>
                            toaster.success({
                                title: "Logged In Successfully",
                                // description: "You have logged in successfully",
                            })
                        }
                    > Sign In </Button>

                    <div id='option'>Don't have an account? <Link to="/signup" style={{ color: "blue", fontWeight: "bold" }}>Sign up</Link> </div>
                </div>
            </div>
        </>
    )
}

export default Signin