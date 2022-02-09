import govtLogo from "../images/govtIcon.png";
import privateLogo from "../images/corporateIcon.png";
import transparentPrivateLogo from "../images/transparentCorp.png";
import navigationBar from "../navigationBar/navigationBar";
import "./homePage.css";

function HomePage(){

    return (
        <div style={{display:"flex",justifyContent:"space-around",marginTop:"50px",marginBottom:"50px"}}>
            {/* <h1>This is Home page</h1> */}
            <div>
            <div className="zoom">
            <img src={govtLogo} ></img>
            </div>
            <div style={{marginLeft:"20%",marginTop:"20px",fontSize:"30px"}}><b>Government Jobs</b></div>
            </div>
            <div>
            <div className="zoom">
            <img src={transparentPrivateLogo} ></img>
            </div>
            <div style={{marginLeft:"25%",marginTop:"20px",fontSize:"30px"}}><b>Private Jobs</b></div>
            </div>
        </div>
    )
}

export default HomePage;