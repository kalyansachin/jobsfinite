import './App.css';
import Header from "./header/header";
import CustomNavigation from './navigationBar/navigationBar';
import SwipeableTextMobileStepper from "./dummy";

function App() {
  return (
    <>
    <div>
      <Header/>
    </div>
    <div style={{position: "relative",
            right:"0.1%",
            left: "0.1%",}}>
      <SwipeableTextMobileStepper/>
    </div>
    <CustomNavigation/>
    <div >
     <h1>JOBS FINITE</h1>
     <h2>Hey Guys Welcome to jobs finite</h2>
     <h3>Work in progress</h3>
    </div>
    </>
  );
}

export default App;
