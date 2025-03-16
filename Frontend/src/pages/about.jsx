import journey from '../assets/journey.png'
import person01 from '../assets/person01.png'
import person02 from '../assets/person02.png'
import '../styles/about.css'
import { Link } from "react-router-dom"
import { useEffect, useState } from "react";
import Loader from "../pages/Loader";

function About() {
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

            <div className="about-journey">
                <div className="about-journey-left">
                    <h2>Our Inspirational Journey</h2>
                    <p>
                        Echoes started with a mission to create a digital sanctuary where memories are treasured, connections are fostered, and emotions find a voice.
                    </p>
                </div>

                <div className="about-journey-right">
                    <img src={journey} alt="journey" />
                </div>
            </div>

            <div className="about-visionaries">
                <h2>Meet Our Visionaries</h2>
                <p>
                    The minds behind Echoes - innovators with a passion for preserving memories and building meaningful connections.
                </p>

                <div className="about-visionaries-content">
                    <div className="visionaries">
                        <div style={{ height: "500px", width: "500px" }}>
                            <img src={person01} alt="person" />
                        </div>
                        <div style={{ width: "40%", padding: "20px" }}>
                            <h3>Alexa Smith</h3>
                            <p>
                                Our dream is to create a digital space where every memory matters, every connection is cherished, and every emotion finds solace.
                            </p>
                        </div>
                    </div>

                    <div className="visionaries">
                        <div style={{ height: "500px", width: "500px" }}>
                            <img src={person02} alt="person" />
                        </div>
                        <div style={{ width: "40%", padding: "20px" }}>
                            <h3>Ryan Johnson</h3>
                            <p>
                                Join us on this remarkable journey of creating a community where memories echo, connections flourish, and emotions resonate.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="about-mission">
                <h2>Our Purposeful Mission</h2>
                <div className="about-mission01">
                    <h3>Preserve Memories</h3>
                    <p>
                        Empower users to digitally document their memories and preserve them for eternity.
                    </p>
                </div>

                <div className="about-mission-content">
                    <div className="about-mission02">
                        <h3>Connect Emotions</h3>
                        <p>
                            Facilitate meaningful connections where emotions can be shared and understood without borders.
                        </p>
                    </div>

                    <div className="about-mission02">
                        <h3>Inspire Expressions</h3>
                        <p>
                            Encourage individuals to freely express their emotions in a supportive and inclusive community.
                        </p>
                    </div>
                </div>
            </div>

            <div className="about-vision">
                <div className="about-vision-content">
                    <h2>Our Vision for Tomorrow</h2>
                    <p>
                        To be the leading digital platform that preserves memories, fosters connections, and empowers individuals to express their true emotions.
                    </p>
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

export default About