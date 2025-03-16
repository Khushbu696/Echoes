import { Input, Textarea } from "@chakra-ui/react"
import '../styles/contact.css'
import { Link } from "react-router-dom"
import { useEffect, useState } from "react";
import Loader from "../pages/Loader";

function contact() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to top when component mounts
        setTimeout(() => setLoading(false), 1000); // Simulating a loading delay
    }, []);

    if (loading) {
        return <div className="flex items-center justify-center min-h-screen"><Loader /></div>;
    }

    return (
        <>
            <div className="navbar">
                <div className="navbar-left">ECHOES</div>

                <div className="navbar-middle">
                    <div><Link to="/">Home</Link></div>
                    <div><Link to="/services">Services</Link></div>
                    <div><Link to="/contact_us">Contact Us</Link></div>
                    <div><Link to="/testimonals">Testimonals</Link></div>
                    <div><Link to="/about_us">About Us</Link></div>
                </div>

                <div className="navbar-right"> <Link to="/signup">Sign Up</Link></div>
            </div>

            <div className="contact-container">
                <div className="contact-container-left">
                    <h2>Say Hi!</h2>
                    <p>
                        Welcome to Echoes - Where Memories Echo Forever
                    </p>

                    <div className="contact-form">
                        <div><Input placeholder="Your Name" /></div>
                        <div><Input placeholder="Your Email" /></div>
                        <div><Input placeholder="Your Phone Number" /></div>
                        <div><Textarea placeholder="Write your message here" /></div>
                        <div id='join-us'>Join Us</div>
                    </div>
                </div>

                <div className="contact-container-right">
                    <h2>Get in Touch with Echoes</h2>
                    <p>Connect with us to enhance your social media diary experience.</p>

                    <div className="contact-list">
                        <div>contact@echoes.com</div>
                        <div>Ahmedabad, India</div>
                        <div>+1234567890</div>
                    </div>
                </div>
            </div>

            <div className="footer">
                <div className="footer-left">Echoes</div>

                <div className="footer-middle">
                    <div>COMPANY</div>
                    <div>HOME</div>
                    <div>SERVICES</div>
                    <div>CONTACT US</div>
                    <div>TESTIMONALS</div>
                    <div>ABOUT US</div>
                </div>

                <div className="footer-right">
                    <div>RESOURCES</div>
                    <div>PRIVACY POLICY</div>
                    <div>TERMS & CONDITIONS</div>
                </div>
            </div>

            <div className="last">© Copyright 2025, All Rights Reserved by Echoes</div>
        </>
    )
}

export default contact