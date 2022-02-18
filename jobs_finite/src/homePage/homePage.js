import govtLogo from "../images/govtIcon.png";
import privateLogo from "../images/corporateIcon.png";
import transparentPrivateLogo from "../images/transparentCorp.png";
import navigationBar from "../navigationBar/navigationBar";
import { useNavigate } from "react-router";
import "./homePage.css";

function HomePage(){

    let history = useNavigate();
    return (
        <div style={{display:"flex",justifyContent:"space-around",marginTop:"50px",marginBottom:"50px"}}>
            <div onClick={()=>history("/govtPortal")} >
            <div className="zoom">
            <img src={govtLogo} style={{background:"linear-gradient(110deg, #EF5350 60%, #ffed4b 40%)"}}></img>
            </div>
            <div style={{marginLeft:"20%",marginTop:"20px",fontSize:"30px"}}><b>Government Jobs</b></div>
            </div>
            <div onClick={()=>history("/privatePortal")}>
            <div className="zoom">
            <img src={transparentPrivateLogo} style={{background:"linear-gradient(rgba(0, 0, 0, 0.6),rgba(0,212, 78, 0.6))"}}></img>
            </div>
            <div style={{marginLeft:"25%",marginTop:"20px",fontSize:"30px"}}><b>Private Jobs</b></div>
            </div>
        </div>
    )
}

export default HomePage;