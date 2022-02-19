import logo from "../images/logo.png";
import "./Header.css";
import Marquee from 'react-fast-marquee';
import { Outlet, Link } from "react-router-dom";


function Header(){

    return (
        <div>
            <div>
                <div id="marquee-top">
                    <Marquee speed={100} pauseOnHover={true}><span>Get latest notifications and job alerts to your mail by subscribing below entering your mail.</span></Marquee>
                </div>
                <div id="header-main">
                    <img src={logo} id="main-logo"></img>
                    <Marquee speed={100} pauseOnHover={true} id="inner-marquee"><span>Get latest notifications and job alerts to your mail by subscribing below entering your mail.</span></Marquee>
                    <div id="header-text">
                        <input type="email" placeholder="Enter your email address" ></input>
                        <button id="header-text-button">Subscribe</button>
                    </div>
                </div>
            </div>
            <div id="navbar-main">
                <a href="/">Home</a>
                <a href="#">About us</a>
                <a href="#">Contact us</a>
                <a href="/govtPortal">Government Jobs</a>
                <a href="/privatePortal">Private Jobs</a>
            </div>
        </div>
    )
}

export default Header;