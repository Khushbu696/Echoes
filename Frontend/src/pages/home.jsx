import '../styles/home.css'
import { Card, Heading, Flex } from "@chakra-ui/react"
import { Input, Textarea, RatingGroup } from "@chakra-ui/react"
import { AccordionItem, AccordionItemContent, AccordionItemTrigger, AccordionRoot, } from "@/components/ui/accordion"
import diary from '../assets/diary.png'
import chat from '../assets/chat.jpg'
import community from '../assets/community.png'
import image01 from '../assets/image01.png'
import { Link } from "react-router-dom"
import { useEffect } from "react";

function home() {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to top when component mounts
      }, []);

    const items = [
        { value: "a", title: "1. What makes Echoes unique?", text: "Echoes is a compelling online social media platform where users can write their diary in digital format, preserving their treasured memories, connecting with people, sharing emotions, and engaging in meaningful conversations." },

        { value: "b", title: "2. How can Echoes help me connect with others?", text: "With Echoes, you can discover like-minded individuals, engage in chats, and forge genuine connections by sharing your thoughts, experiences, and emotions through your digital diary entries." },

        { value: "c", title: "3. Why choose Echoes for preserving memories?", text: "Echoes offers a secure and convenient way to store your important memories, enabling you to revisit them at any time, reflect on your journey, and create a lasting legacy through your digital diary entries." },
    ]

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

            <div className="home-header">
                <div className="home-header-container">
                    <h1>Welcome to Echoes - Your Space for Connection and Reflection</h1>
                    <h3>Experience the joy of writing diaries in digital format, connecting with people, and sharing your emotions on Echoes. Start your journey today!</h3>
                </div>
            </div>

            <div className="home-services">
                    <h2>Our Services</h2>
                <div className="home-services-content">
                    <div>
                        <h3>Digital Diary Creation</h3>
                        <p>
                            Create and preserve your digital diaries securely on our platform. Share your memories with loved ones easily.
                        </p>
                    </div>

                    <div>
                        <h3>Discover New Connections</h3>
                        <p>
                            Explore and connect with people from around the world. Find like-minded individuals and expand your social circle.
                        </p>
                    </div>

                    <div>
                        <h3>Emotion Sharing</h3>
                        <p>
                            Express your feelings, emotions, and stories in a safe and supportive online environment. Share and connect with others effortlessly.
                        </p>
                    </div>
                </div>
            </div>

            <div className="home-features">
                <h2>Key Features of Echoes</h2>
                <div className="home-features-content">
                    <div className="text">
                        <h3>Secure Diary Writing</h3>
                        <p>
                            Your diaries are safe and encrypted on Echoes. Write and store your memories with peace of mind.
                        </p>
                    </div>
                    <div className="image">
                        <img src={diary} alt="sample image" />
                    </div>
                </div>

                <div className="home-features-content">
                    <div className="image">
                        <img src={chat} alt="sample image" />
                    </div>
                    <div className="text">
                        <h3>Live Chat and Messaging</h3>
                        <p>
                            Stay connected with friends through real-time chat and messaging features. Share your emotions instantly.
                        </p>
                    </div>
                </div>

                <div className="home-features-content">
                    <div className="text">
                        <h3>Community Discovery</h3>
                        <p>
                            Discover new friends, join communities, and engage with like-minded individuals on Echoes. Expand your social network.
                        </p>
                    </div>
                    <div className="image">
                        <img src={community} alt="sample image" />
                    </div>
                </div>
            </div>

            <div className="home-discover">
                <div className="home-discover-container">
                    <h2>Discover Echoes - Your Online Diary and Social Hub</h2>
                    <AccordionRoot multiple size='lg' style={{ width: "80%", margin: "0 auto" }}>
                        {items.map((item, index) => (
                            <AccordionItem key={index} value={item.value} style={{ margin: "30px 0", backgroundColor: "#dbdbdb", padding: "10px", borderRadius: "10px" }}>
                                <AccordionItemTrigger>{item.title}</AccordionItemTrigger>
                                <AccordionItemContent>{item.text}</AccordionItemContent>
                            </AccordionItem>
                        ))}
                    </AccordionRoot>
                </div>
            </div>

            <div className="home-what">
                <div className="home-what-container">
                    <h2>What we stand for?</h2>
                    <p>
                        Welcome to Echoes - Your online social media platform where you can write and preserve your memories in a digital diary format. Connect with others, share your emotions, and discover new friends.
                    </p>
                </div>
            </div>

            <div className="home-cards">
                <h2>Echoes - Where Memories Come Alive</h2>
                <Flex gap="12" justify={'center'} style={{ margin: "50px 0" }}>
                    <Card.Root width="350px" style={{ boxShadow: "0px 8px 12px rgba(0, 0, 0, 0.1)" }}>
                        <Card.Header>
                            <Heading size="lg">
                                <RatingGroup.Root readOnly count={5} defaultValue={5} size="sm" colorPalette={'yellow'}>
                                    <RatingGroup.HiddenInput />
                                    <RatingGroup.Control>
                                        {Array.from({ length: 5 }).map((_, index) => (
                                            <RatingGroup.Item key={index} index={index + 1}>
                                                <RatingGroup.ItemIndicator />
                                            </RatingGroup.Item>
                                        ))}
                                    </RatingGroup.Control>
                                </RatingGroup.Root>
                            </Heading>
                        </Card.Header>
                        <Card.Body color="#212529">
                            Echoes transformed how I document my memories! <br /><br />
                            Emily Johnson <br />
                            Photographer
                        </Card.Body>
                    </Card.Root>

                    <Card.Root width="350px" style={{ boxShadow: "0px 8px 12px rgba(0, 0, 0, 0.1)" }}>
                        <Card.Header>
                            <Heading size="lg">
                                <RatingGroup.Root readOnly count={5} defaultValue={5} size="sm" colorPalette={'yellow'}>
                                    <RatingGroup.HiddenInput />
                                    <RatingGroup.Control>
                                        {Array.from({ length: 5 }).map((_, index) => (
                                            <RatingGroup.Item key={index} index={index + 1}>
                                                <RatingGroup.ItemIndicator />
                                            </RatingGroup.Item>
                                        ))}
                                    </RatingGroup.Control>
                                </RatingGroup.Root>
                            </Heading>
                        </Card.Header>
                        <Card.Body color="#212529">
                            Sharing emotions with new friends made easy! <br /><br />
                            David Smith <br />
                            Writer
                        </Card.Body>
                    </Card.Root>

                    <Card.Root width="350px" style={{ boxShadow: "0px 8px 12px rgba(0, 0, 0, 0.1)" }}>
                        <Card.Header>
                            <Heading size="lg">
                                <RatingGroup.Root readOnly count={5} defaultValue={5} size="sm" colorPalette={'yellow'}>
                                    <RatingGroup.HiddenInput />
                                    <RatingGroup.Control>
                                        {Array.from({ length: 5 }).map((_, index) => (
                                            <RatingGroup.Item key={index} index={index + 1}>
                                                <RatingGroup.ItemIndicator />
                                            </RatingGroup.Item>
                                        ))}
                                    </RatingGroup.Control>
                                </RatingGroup.Root>
                            </Heading>
                        </Card.Header>
                        <Card.Body color="#212529">
                            Echoes - Where memories find their true voice. <br /><br />
                            Sarah Thompson <br />
                            Artist
                        </Card.Body>
                    </Card.Root>
                </Flex>
            </div>

            <div className="home-connect">
                <div className="home-connect-left">
                    <h2>Discover, Connect, and Preserve Memories with Echoes!</h2>
                    <p>
                        Join Echoes - an online social media platform where you can write your digital diary, discover new connections, chat, and share emotions.
                    </p>

                    <div className="home-form">
                        <div><Input placeholder="Your Name" /></div>
                        <div><Input placeholder="Your Email" /></div>
                        <div><Input placeholder="Your Phone Number" /></div>
                        <div><Textarea placeholder="Write your message here" /></div>
                        <div id='join-us'>Join Us</div>
                    </div>
                </div>

                <div className="home-connect-right">
                    <img src={image01} alt="computer on a desk" />
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

export default home