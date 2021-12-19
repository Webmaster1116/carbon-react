import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import React, {useEffect, useState}from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

//Pages
import Homepage from './pages';
import YourRights from './pages/YourRights';
import PurchaseConditionsPage from './pages/PurchaseConditionsPage';
import AnalysisCarbon from './pages/AnalysisCarbon';
import Hypotesis from './pages/Hypotesis';
import OurForest from './pages/OurForests';
import ProjectPrinciples from './pages/ProjectPrinciples';
import TermsOfUse from './pages/TermsOfUse';
import Privacy from './pages/Privacy';
import Cookie from './pages/Cookie';
import More from './pages/More';
import MintPage from './pages/Mint';
import PaidMintPage from './pages/PaidNftPage'


function App() {

  const [timerFinished, setTimerFinished] = useState(false)

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <Router>  
       <Routes>
        <Route path="/" element={<Homepage setTimerFinished={setTimerFinished} />} />
        <Route path="/yourrights" element={<YourRights />} />
        <Route path="/purchaseconditions" element={<PurchaseConditionsPage />} />
        <Route path="/carbonanalysis" element={<AnalysisCarbon />} />
        <Route path="/ourhypothesis" element={<Hypotesis />} />
        <Route path="/ourforest" element={<OurForest />} />
        <Route path="/projectprinciples" element={<ProjectPrinciples />} />
        <Route path="/termsofuse" element={<TermsOfUse />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/cookiepolicy" element={<Cookie />} />
        <Route path="/minting" element={<MintPage />} />
        <Route path="/paidminting" element={<PaidMintPage timerFinished={timerFinished} />} />
        <Route path="/more" element={<More />} />
       </Routes>
    </Router>
  );
}

export default App;
