import Header from "../header/header";
import SwipeableTextMobileStepper from "../carousal/carousal";
import HomePage from '../homePage/homePage';

function DashBoard(){

    return (
        <>
        <div>
            <Header/>
        </div>
        <div style={{marginTop:"40px"}}>
          <SwipeableTextMobileStepper/>
        </div>
        <HomePage/>
        </>
    )
}

export default DashBoard;