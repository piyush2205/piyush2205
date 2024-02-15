import "../Style/Navbar.css"
import linkDin from "../Assets/Vector.svg"
import { Link } from "react-router-dom"
import Resume from "../Assets/Piyush_kumar_singh_Resume.pdf";
import React, { useState } from 'react';
import Modal from 'react-modal';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);
    return (
        <>
            <nav>
                <div className="Main-Contanier-Wrapper">
                    <div className="InnerWrapper">
                        <div>
                            <Link to={"/"} ><a href="#" className="logo">Piyush Singh</a></Link>
                        </div>
                        <div>

                            <Link to="/about" style={{ marginLeft: "25px", letterSpacing: "1px" }} > About</Link>
                            <Link to="/project" style={{ marginLeft: "25px", letterSpacing: "1px" }} > Projects</Link>
                            <Link><a href="#" onClick={openModal} style={{ marginLeft: "25px", letterSpacing: "1px" }} > Resume</a></Link>
                            <Modal isOpen={isOpen} onRequestClose={closeModal} contentLabel="Example Popup"
                                style={{
                                    overlay: { backgroundColor: 'rgba(0, 0, 0, 0.5)' },
                                    content: {
                                        textAlign: "center",
                                        backgroundColor: '#dadbd8',
                                        height: "180px",
                                        width: "450px",
                                        top: '50%',
                                        left: '50%',
                                        right: 'auto',
                                        bottom: 'auto',
                                        marginRight: '-50%',
                                        transform: 'translate(-50%, -50%)',
                                    }
                                }}>
                                <h2>Resume</h2>
                                <p>Do you want do Download?</p>
                                <button style={{ height: "40px", width: "100px", }}  > <a href={Resume} onClick={closeModal} download>Yes</a></button>

                                <button onClick={closeModal} style={{ marginLeft: "25px", height: "40px", width: "100px", }}><a>No</a></button>
                            </Modal>
                        </div>


                    </div>
                    <div className="Social-Nav-Icon-Wrapper">
                        <a href="https://www.linkedin.com/in/piyush-kumar-singh-6234141ba" target="_blank"><svg width="15" height="15" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.375 8.75H2.0625V3.3125H0.375V8.75ZM1.21875 0.625C0.6875 0.625 0.25 1.0625 0.25 1.59375C0.25 2.125 0.6875 2.5625 1.21875 2.5625C1.75 2.5625 2.1875 2.125 2.1875 1.59375C2.1875 1.0625 1.75 0.625 1.21875 0.625ZM6.34375 3.1875C5.53125 3.1875 4.96875 3.625 4.75 4.0625H4.71875V3.3125H3.09375V8.75H4.78125V6.0625C4.78125 5.34375 4.90625 4.65625 5.78125 4.65625C6.65625 4.65625 6.65625 5.46875 6.65625 6.09375V8.75H8.375V5.78125C8.375 4.3125 8.0625 3.1875 6.34375 3.1875Z" fill="black" />
                        </svg>
                        </a>
                        <a href="#"><svg width="15" height="15" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.973 2.6448C8.9511 2.1657 8.8752 1.8387 8.7639 1.5525C8.649 1.2567 8.4951 1.0056 8.2449 0.7554C7.9947 0.5052 7.7439 0.3513 7.4478 0.2364C7.1616 0.1251 6.8343 0.0491999 6.3555 0.0272999C5.8755 0.00509988 5.7222 0 4.5 0C3.2778 0 3.1245 0.00510005 2.6448 0.027C2.1657 0.0489 1.8387 0.1248 1.5525 0.2361C1.2567 0.351 1.0056 0.5049 0.7554 0.7551C0.5052 1.0053 0.3513 1.2561 0.2364 1.5522C0.1251 1.8384 0.0491999 2.1657 0.0272999 2.6445C0.00509988 3.1245 0 3.2778 0 4.5C0 5.7222 0.00510005 5.8755 0.027 6.3552C0.0489 6.8343 0.1248 7.1613 0.2361 7.4475C0.351 7.7433 0.5049 7.9944 0.7551 8.2446C1.0053 8.4948 1.2561 8.6487 1.5522 8.7636C1.8384 8.8749 2.1657 8.9508 2.6445 8.9727C3.1245 8.9949 3.2778 9 4.5 9C5.7222 9 5.8755 8.9949 6.3552 8.973C6.8343 8.9511 7.1613 8.8752 7.4475 8.7639C7.7433 8.649 7.9944 8.4951 8.2446 8.2449C8.4948 7.9947 8.6487 7.7439 8.7636 7.4478C8.8749 7.1616 8.9508 6.8343 8.9727 6.3555C8.9949 5.8755 9 5.7222 9 4.5C9 3.2778 8.9949 3.1245 8.973 2.6448ZM8.163 6.3183C8.1429 6.7569 8.0697 6.9954 8.0082 7.1538C7.9266 7.3638 7.8291 7.5138 7.6716 7.6713C7.5141 7.8288 7.3641 7.9263 7.1541 8.0079C6.9954 8.0694 6.7572 8.1429 6.3186 8.1627C5.8443 8.1843 5.7018 8.1888 4.5003 8.1888C3.2988 8.1888 3.1563 8.1843 2.682 8.1627C2.2434 8.1426 2.0049 8.0694 1.8465 8.0079C1.6365 7.9263 1.4865 7.8288 1.329 7.6713C1.1715 7.5138 1.074 7.3638 0.9924 7.1538C0.9309 6.9951 0.8574 6.7569 0.8376 6.3183C0.816 5.8437 0.8115 5.7015 0.8115 4.5C0.8115 3.2985 0.816 3.156 0.8376 2.6817C0.8577 2.2431 0.9309 2.0046 0.9924 1.8462C1.074 1.6362 1.1715 1.4862 1.329 1.3287C1.4865 1.1712 1.6365 1.0737 1.8465 0.9921C2.0052 0.9306 2.2434 0.8571 2.682 0.8373C3.1566 0.8157 3.2988 0.8112 4.5003 0.8112C5.7018 0.8112 5.8443 0.8157 6.3186 0.8373C6.7572 0.8574 6.9957 0.9306 7.1541 0.9921C7.3641 1.0737 7.5141 1.1712 7.6716 1.3287C7.8291 1.4862 7.9266 1.6362 8.0082 1.8462C8.0697 2.0049 8.1432 2.2431 8.163 2.6817C8.1846 3.1563 8.1891 3.2985 8.1891 4.5C8.1891 5.7015 8.1846 5.844 8.163 6.3183ZM4.5 2.1891C3.2238 2.1891 2.1891 3.2238 2.1891 4.5C2.1891 5.7762 3.2238 6.8109 4.5 6.8109C5.7762 6.8109 6.8109 5.7762 6.8109 4.5C6.8109 3.2238 5.7762 2.1891 4.5 2.1891ZM4.5 6C3.6717 6 3 5.3283 3 4.5C3 3.6717 3.6717 3 4.5 3C5.3283 3 6 3.6717 6 4.5C6 5.3283 5.3283 6 4.5 6ZM6.9021 1.5579C6.6039 1.5579 6.3621 1.7997 6.3621 2.0979C6.3621 2.3961 6.6039 2.6379 6.9021 2.6379C7.2003 2.6379 7.4421 2.3961 7.4421 2.0979C7.4421 1.7997 7.2003 1.5579 6.9021 1.5579Z" fill="black" />
                        </svg>
                        </a>

                    </div>
                </div >
            </nav >


        </>
    )
}

export default Navbar