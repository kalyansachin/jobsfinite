import DashBoard from "./dashBoard/dashboard";
import { BrowserRouter as Router,Routes, useNavigate,Route } from "react-router-dom";
import NavigationBar from "./navigationBar/navigationBar";

function App() {

  // let history  = useNavigate();
  return (
    
     <Router>
       <Routes>
         <Route exact path="/" element={<DashBoard/>}></Route>
         <Route path="/govtPortal" element={<NavigationBar/>}></Route>
         <Route path="/privatePortal" element={<NavigationBar/>}></Route>
         </Routes>
     </Router> 
    
  );
}

export default App;
