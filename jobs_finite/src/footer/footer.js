import React from 'react';
import "./footer.css"
import { FaFacebook,FaInstagram,FaTwitter,FaLinkedin } from "react-icons/fa"

const Footer = () => {
    return (
        <div>
            <footer class="footer">
                <div class="container">
                    <div class="row">
                        <div class="footer-col">
                            <h4>company</h4>
                            <ul>
                                <li><a href="#">about us</a></li>
                                <li><a href="#">our services</a></li>
                                <li><a href="#">privacy policy</a></li>
                            </ul>
                        </div>
                        <div class="footer-col">
                            <h4>get help</h4>
                            <ul>
                                <li><a href="#">FAQ</a></li>
                                <li><a href="#">Contact us</a></li>
                                <li><a href="#">Feedback</a></li>
                                <li><textarea type="text" style={{marginRight: "3px"}}></textarea><button id='submit' style={{display:"block", verticalAlign: "center", color: "gray", cursor: "pointer"}}>Submit</button></li>
                            </ul>
                        </div>
                        <div class="footer-col">
                            <h4>Navigate</h4>
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="/stategovtPortal">State Government Jobs</a></li>
                                <li><a href="/centralgovtPortal">Central Government Jobs</a></li>
                                <li><a href="/privatePortal">IT Jobs</a></li>
                            </ul>
                        </div>
                        <div class="footer-col">
                            <h4>follow us</h4>
                            <div class="social-links">
                                <a href="#"><i class="fab fa-facebook-f"><FaFacebook/></i></a>
                                <a href="#"><i class="fab fa-twitter"><FaTwitter/></i></a>
                                <a href="#"><i class="fab fa-instagram"><FaInstagram/></i></a>
                                <a href="#"><i class="fab fa-linkedin-in"><FaLinkedin/></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;