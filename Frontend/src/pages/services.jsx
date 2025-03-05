import '../styles/services.css'
import { Link } from "react-router-dom"
import { useEffect } from "react";

function services() {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to top when component mounts
    }, []);

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

            <div className="services-header">
                <h2>Our Services</h2>
                <div className="services-header-content">
                    <div className="services-header-container">
                        <h3>Digital Diary Writing</h3>
                        <p>
                            Experience the joy of journaling in a digital format where you can write, reminisce, and keep your memories alive. Start documenting your life journey today on Echoes.
                        </p>
                    </div>

                    <div className="services-header-container">
                        <h3>Social Connection</h3>
                        <p>
                            Connect with like-minded individuals, share your emotions, and foster meaningful relationships through our interactive social platform. Join a supportive community at Echoes.
                        </p>
                    </div>

                    <div className="services-header-container">
                        <h3>Memory Preservation</h3>
                        <p>
                            Safeguard your important memories, milestones, and special moments in a secure digital space. Let Echoes be your personal vault of cherished experiences.
                        </p>
                    </div>

                    <div className="services-header-container">
                        <h3>Emotion Sharing</h3>
                        <p>
                            Express yourself freely, share your thoughts, feelings, and emotions with our empathetic community members. Connect on a deeper level at Echoes.
                        </p>
                    </div>

                    <div className="services-header-container">
                        <h3>Chat Features</h3>
                        <p>
                            Engage in real-time conversations, private messaging, and group chats to stay connected with friends and acquaintances. Communication made easy at Echoes.
                        </p>
                    </div>

                    <div className="services-header-container">
                        <h3>Discover People</h3>
                        <p>
                            Explore a diverse network of individuals, discover new friends, and broaden your social circle on Echoes. Connect with people who share your interests.
                        </p>
                    </div>
                </div>
            </div>

            <div className="services-diff">
                <h2>What makes us Different from Others ?</h2>
                <div className="services-diff-content">
                    <div>
                        <h3>Innovative</h3>
                        <p>Revolutionizing social media</p>
                    </div>

                    <div>
                        <h3>Personalized</h3>
                        <p>Tailored for your needs</p>
                    </div>

                    <div>
                        <h3>Community-driven</h3>
                        <p>Building bonds together</p>
                    </div>

                    <div>
                        <h3>Secure</h3>
                        <p>Protecting your memories</p>
                    </div>
                </div>
            </div>

            <div className="services-growth">
                <div className="services-growth-left">
                    <h2>Our Continuous Growth</h2>
                    <p>Empowering users and expanding connections</p>
                </div>

                <div className="services-growth-right">
                    <div>
                        <h3>2M+</h3>
                        <p>Memories Preserved</p>
                    </div>

                    <div>
                        <h3>98%</h3>
                        <p>Positive User Satisfaction</p>
                    </div>

                    <div>
                        <h3>5M+</h3>
                        <p>Community Interactions</p>
                    </div>

                    <div>
                        <h3>50+</h3>
                        <p>Countries Connected</p>
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

export default services