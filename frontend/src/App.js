import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

import Home from "./components/Home";
import NavBar from "./components/NavBar";

import Detect from "./components/pages/Detect";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/disease_detect' element={<Detect />} />
      </Routes>
    </Router>
  );
}

export default App;
