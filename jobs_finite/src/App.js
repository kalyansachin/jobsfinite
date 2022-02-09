import './App.css';
import Header from "./header/header";
import CustomNavigation from './navigationBar/navigationBar';
import SwipeableTextMobileStepper from "./carousal/carousal";
import HomePage from './homePage/homePage';

function App() {
  return (
    <>
    <div>
      <Header/>
    </div>
    <div style={{marginTop:"40px"
            }}>
      <SwipeableTextMobileStepper/>
    </div>
    {/* <div >
     <h1>JOBS FINITE</h1>
     <h2>Hey Guys Welcome to jobs finite</h2>
     <h3>Work in progress</h3>
    </div> */}
    <HomePage/>
    </>
  );
}

export default App;
