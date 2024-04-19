import React from 'react';
import './Home.css';
import NavBar from './NavBar';
import { Link } from "react-router-dom"; // Import Link from react-router-dom

function Home() {
  return (
    <div className='total'>
      <div className="bg"></div>
      <NavBar />
      <div className='but-cont'>
        <Link to="http://localhost:8501/" className='butt'>Crop-Yield Estimator</Link>
        <Link to="http://127.0.0.1:5000" className='butt'>Plant Disease Detection</Link>
      </div>
    </div>
  );
}

export default Home;
