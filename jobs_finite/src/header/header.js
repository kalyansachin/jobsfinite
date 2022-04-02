import { useState } from "react";
import logo from "../images/logo.png";
import "./Header.css";
import Marquee from 'react-fast-marquee';
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import Select from "react-select";
import { Outlet, Link } from "react-router-dom";




function Header() {

    const [boo, setBool] = useState(true);
    const [categories, setCategories] = useState([]);
    const [focus, setFocus] = useState(false);
    const centralData = [
        {
            value: 1,
            label: "UPSC"
        },
        {
            value: 2,
            label: "Bank"
        },
        {
            value: 3,
            label: "Railways"
        },
        {
            value: 4,
            label: "SSC"
        }
    ];
    const stateData = [
        { value: 1, label: "Andhra Pradesh" }, { value: 2, label: "Arunachal Pradesh" }, { value: 3, label: "Assam" }, { value: 4, label: "Bihar" },
        { value: 5, label: "Chhattisgarh" }, { value: 6, label: "Goa" }, { value: 7, label: "Gujarat" }, { value: 8, label: "Haryana" }, { value: 9, label: "Himachal Pradesh" },
        { value: 10, label: "Jharkhand" }, { value: 11, label: "Karnataka" }, { value: 12, label: "Kerala" }, { value: 13, label: "Madhya Pradesh" },
        { value: 14, label: "Maharashtra" }, { value: 15, label: "Manipur" }, { value: 16, label: "Meghalaya" }, { value: 17, label: "Mizoram" },
        { value: 18, label: "Nagaland" }, { value: 19, label: "Odisha" }, { value: 20, label: "Punjab" }, { value: 21, label: "Rajasthan" },
        { value: 22, label: "Sikkim" }, { value: 23, label: "Tamil Nadu" }, { value: 24, label: "Telangana" }, { value: 25, label: "Tripura" },
        { value: 26, label: "Uttar Pradesh" }, { value: 27, label: "Uttarakhand" }, { value: 28, label: "West Bengal" }
    ]
    const selectArray = [];

    const showAlert = () => {
        const val = document.getElementById('type-email').value;
        // var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        console.log(val)
        var validRegex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;

        if (val === "" || !validRegex.test(val)) {
            alert("Enter valid email address");
        } else {
            let mail = document.getElementById("type-email").value;
            let name = mail.substring(0, mail.lastIndexOf("@"));
            // console.log('selected categories', selectArray);
            let str = "";
            if (selectArray.length === 0) {
                alert("Please select the categories you need to get notified");
                // document.getElementById('select-tag').autofocus = true;
            }
            else {
                for (let i = 0; i < selectArray.length; i++) {
                    if (i == 0) {
                        str = str + selectArray[i];
                    }
                    else {
                        str = str + "," + selectArray[i];
                    }
                }
                alert("Thank you for subscribing " + name + ". You will get job alerts to your mail now on " + str + ".")
            }
        }

    }

    const storeCategories = (e) => {
        // console.log(selected[selected.length-1])
        console.log(e)

        const updatedCategories = e

        for (let i = 0; i < updatedCategories.length; i++) {
            selectArray[i] = updatedCategories[i].label;
        }

    }


    return (
        <div>
            <div>
                <div id="marquee-top">
                    <Marquee speed={100} pauseOnHover={true}><span>Get latest notifications and job alerts to your mail by subscribing below entering your mail.</span></Marquee>
                </div>
                <div id="header-main">
                    <div id="float-left">
                        <img src={logo} id="main-logo"></img>
                    </div>
                    <div id="float-right">
                        <div id="multi-select">{window.location.pathname === "/centralgovtPortal" ?
                            <Select isMulti id="select-tag" placeholder="Select categories" options={centralData} onChange={storeCategories}
                                hideSelectedOptions={true}
                                theme={(theme) => ({
                                    ...theme,
                                    borderRadius: 0,
                                    colors: {
                                        ...theme.colors,
                                        primary25: 'gray',
                                    },
                                })} /> : null}
                            {window.location.pathname === "/stategovtPortal" ? <Select
                                theme={(theme) => ({
                                    ...theme,
                                    borderRadius: 0,
                                    colors: {
                                        ...theme.colors,
                                        primary25: 'gray',
                                    },
                                })
                                } isMulti placeholder="Select categories" options={stateData} onChange={storeCategories} /> : null}
                        </div>
                        <div id="header-text">
                            <input type="email" id="type-email" placeholder="Enter your email address" />
                            <button id="header-text-button" onClick={showAlert}>Subscribe</button>
                        </div>
                    </div>
                </div>
                <div id="float-right-mobile">
                        <div id="multi-select-mobile">{window.location.pathname === "/centralgovtPortal" ?
                            <Select isMulti id="select-tag-mobile" placeholder="Select categories" options={centralData} onChange={storeCategories}
                                hideSelectedOptions={true}
                                theme={(theme) => ({
                                    ...theme,
                                    borderRadius: 0,
                                    colors: {
                                        ...theme.colors,
                                        primary25: 'gray',
                                    },
                                })} /> : null}
                            {window.location.pathname === "/stategovtPortal" ? <Select
                                theme={(theme) => ({
                                    ...theme,
                                    borderRadius: 0,
                                    colors: {
                                        ...theme.colors,
                                        primary25: 'gray',
                                    },
                                })
                                } isMulti placeholder="Select categories" options={stateData} onChange={storeCategories} /> : null}
                        </div>
                    </div>
            </div>
            {/* <div id="multi-select-mobile">{window.location.pathname === "/centralgovtPortal" ? 
                    <Select  isMulti placeholder="Select categories" options={centralData} /> : null}
                    {window.location.pathname === "/stategovtPortal" ? <Select  isMulti placeholder="Select categories" options={stateData} /> : null}
            </div> */}
            <div id="navbar-main">
                <a href="/" className="hide main">Home</a>
                <a href="" className="hide">Contact us</a>
                <a href="/centralgovtPortal" className="govt-btn hide link">Central Government Jobs</a>
                <a href="/stategovtPortal">State Government Jobs</a>
                <a href="/privatePortal" className="hide">Private Jobs</a>
            </div>
        </div>
    )
}

export default Header;