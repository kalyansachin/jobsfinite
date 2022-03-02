import { useState } from "react";
import logo from "../images/logo.png";
import "./Header.css";
import Marquee from 'react-fast-marquee';
import { AiFillCaretDown,AiFillCaretUp } from "react-icons/ai";
import { Outlet, Link } from "react-router-dom";




function Header(){

    const [boo, setBool] = useState(true);

    const showAlert = () => {
        if(document.getElementById("type-email").value == null)
        {
            alert("Enter valid email address");
        }else{
            let mail = document.getElementById("type-email").value;
            let name   = mail.substring(0, mail.lastIndexOf("@"));
            alert("Thank you for subscribing " + name + ". You will get job alerts to your mail now!")
        }

    }


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
                        <input type="email" id="type-email" placeholder="Enter your email address" ></input>
                        <button id="header-text-button" onClick={showAlert}>Subscribe</button>
                    </div>
                </div>
            </div>
            <div id="navbar-main">
                <a href="/" className="hide main">Home</a>
                <a href="#" className="hide">Contact us</a>
                <a href="/centralgovtPortal" className="govt-btn hide link">Central Government Jobs</a>
                <a href="/stategovtPortal">State Government Jobs</a>
                <a href="/privatePortal" className="hide">Private Jobs</a>
            </div>
        </div>
    )
}

export default Header;