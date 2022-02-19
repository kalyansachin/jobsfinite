import govtLogo from "../images/govtIcon.png";
import privateLogo from "../images/corporateIcon.png";
import transparentPrivateLogo from "../images/transparentCorp.png";
import navigationBar from "../navigationBar/navigationBar";
import { useNavigate } from "react-router";
import "./homePage.css";

function HomePage(){

    let history = useNavigate();
    return (
        <div id="homepage-main-outside">
            <div id="homepage-main">
                <div onClick={()=>history("/govtPortal")} >
                    <div className="zoom">
                        <img src={govtLogo} ></img>
                    </div>
                    <div className = "job-category" style={{color: "#CB1515"}}>
                        <b>Government Jobs</b>
                    </div>
                </div>
                <div onClick={()=>history("/privatePortal")}>
                    <div className="zoom">
                        <img src={transparentPrivateLogo} ></img>
                    </div>
                    <div className = "job-category" style={{color: "royalblue"}}>
                        <b>Private Jobs</b>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage;