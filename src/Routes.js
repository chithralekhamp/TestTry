import React from "react";
import TripmaEighteen from "pages/TripmaEighteen";
import TripmaSeventeen from "pages/TripmaSeventeen";
import TripmaEleven from "pages/TripmaEleven";
import TripmaNineteen from "pages/TripmaNineteen";
import TripmaTen from "pages/TripmaTen";
import TripmaNine from "pages/TripmaNine";
import TripmaThirteen from "pages/TripmaThirteen";
import TripmaSeven from "pages/TripmaSeven";
import TripmaSixteen from "pages/TripmaSixteen";
import TripmaSix from "pages/TripmaSix";
import TripmaTwentyOne from "pages/TripmaTwentyOne";
import TripmaTwelve from "pages/TripmaTwelve";
import TripmaFive from "pages/TripmaFive";
import TripmaFourteen from "pages/TripmaFourteen";
import TripmaTwenty from "pages/TripmaTwenty";
import TripmaOne from "pages/TripmaOne";
import TripmaFour from "pages/TripmaFour";
import TripmaFifteen from "pages/TripmaFifteen";
import Tripma from "pages/Tripma";
import TripmaTwo from "pages/TripmaTwo";
import TripmaTwentyTwo from "pages/TripmaTwentyTwo";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/tripmatwentytwo" element={<TripmaTwentyTwo />} />
        <Route path="/tripmatwo" element={<TripmaTwo />} />
        <Route path="/tripma" element={<Tripma />} />
        <Route path="/tripmafifteen" element={<TripmaFifteen />} />
        <Route path="/tripmafour" element={<TripmaFour />} />
        <Route path="/tripmaone" element={<TripmaOne />} />
        <Route path="/tripmatwenty" element={<TripmaTwenty />} />
        <Route path="/tripmafourteen" element={<TripmaFourteen />} />
        <Route path="/tripmafive" element={<TripmaFive />} />
        <Route path="/tripmatwelve" element={<TripmaTwelve />} />
        <Route path="/tripmatwentyone" element={<TripmaTwentyOne />} />
        <Route path="/tripmasix" element={<TripmaSix />} />
        <Route path="/tripmasixteen" element={<TripmaSixteen />} />
        <Route path="/tripmaseven" element={<TripmaSeven />} />
        <Route path="/tripmathirteen" element={<TripmaThirteen />} />
        <Route path="/tripmanine" element={<TripmaNine />} />
        <Route path="/tripmaten" element={<TripmaTen />} />
        <Route path="/tripmanineteen" element={<TripmaNineteen />} />
        <Route path="/tripmaeleven" element={<TripmaEleven />} />
        <Route path="/tripmaseventeen" element={<TripmaSeventeen />} />
        <Route path="/tripmaeighteen" element={<TripmaEighteen />} />
      </Routes>
    </Router>
  );
};
export default ProjectRoutes;
