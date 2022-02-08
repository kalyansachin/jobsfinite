import logo from "../images/logo.png";


function Header(){

    return (
        <div style={{marginTop:"20px",display:"flex",justifyContent:"space-between",alignItems:"baseline"}}>
            <img src={logo} style={{height:"20px",width:"150px"}}></img>
            {/* <div style={{display:"flex",justifyContent:"space-between"}} > */}
            <div>
            <label><b>Get latest notifications and job Alerts to your mail by subscribing</b></label>
            </div>
            <div style={{marginRight:"200px"}}>
            <input type="email" placeholder="Enter email address" ></input>
            <button style={{backgroundColor:"grey"}}><b>Subscribe</b></button>
            </div>
            {/* </div> */}
        </div>
    )
}

export default Header;