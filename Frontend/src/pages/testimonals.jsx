import '../styles/testimonals.css'
import { Link } from "react-router-dom"
import { useEffect } from "react";

function testimonals() {
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

            <div className="testimonals">
                <h2>What Our Users Say</h2>

                <div className="testimonals-container">
                    <div>
                        <p>
                            Echoes has truly transformed how I store and share my memories. It's the perfect platform for anyone looking to connect, reflect, and cherish their moments in a digital diary that's much more than just a diary.
                        </p> <br />
                        <p>
                            Sarah - Travel Blogger & Content Creator
                        </p>
                    </div>

                    <div>
                        <p>
                            I never thought a digital diary could be this engaging and personal. Echoes has added a new dimension to how I express my thoughts and feelings. It's more than a social platform; it's a sanctuary for my emotions.
                        </p> <br />
                        <p>
                            Alex - Art Enthusiast & Writer
                        </p>
                    </div>

                    <div>
                        <p>
                            Being part of the Echoes community has been a soulful journey. I've found friends, support, and endless inspiration here. It's where I share my joys and sorrows, knowing there's a genuine connection in every word.
                        </p> <br />
                        <p>
                            Emily - Musician & Nature Lover
                        </p>
                    </div>

                    <div>
                        <p>
                            Echoes is a digital haven for introspection and social bonding. It's helped me open up, express myself freely, and connect with like-minded individuals who appreciate the beauty of sharing heartfelt stories.
                        </p> <br />
                        <p>
                            Jack - Tech Enthusiast & Gamer
                        </p>
                    </div>

                    <div>
                        <p>
                            I'm grateful for Echoes for giving me a safe space to record my memories and share my life's ups and downs. It's comforting to know that there's a supportive community ready to listen and understand every emotion I convey.
                        </p> <br />
                        <p>
                            Sophie - Wellness Coach & Yoga Instructor
                        </p>
                    </div>

                    <div>
                        <p>
                            The beauty of Echoes lies in its simplicity and depth. It's more than just a social media platform; it's a collection of stories, emotions, and personal growth. I highly recommend it to anyone seeking authenticity and connection.
                        </p> <br />
                        <p>
                            Daniel - Photographer & Storyteller
                        </p>
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

export default testimonals