import DashBoard from "./dashBoard/dashboard";
import { BrowserRouter as Router,Routes, useNavigate,Route } from "react-router-dom";
import CentralGovernment from "./governmentportal/central";
import Corporate from "./corporateportal/corporate";
import StateGovernment from "./governmentportal/state";
import Job from "./governmentportal/job";
import { useEffect } from 'react';
import { axios } from "axios";

function App() {


  // let history  = useNavigate();
  return (
    
     <Router>
        <Routes>
          <Route exact path="/" element={<DashBoard/>}></Route>
          <Route path="/centralgovtPortal" element={<CentralGovernment/>}></Route>
          <Route exact path="/centralgovtPortal/job" element={<Job/>}></Route>
          <Route path="/stategovtportal" element={<StateGovernment/>}></Route>
          <Route path="/privatePortal" element={<Corporate/>}></Route>
         </Routes>
     </Router> 
    
  );
}

export default App;
