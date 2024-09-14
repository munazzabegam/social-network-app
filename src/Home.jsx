import React from "react";
import CCarousel from "./components/CCarousel";
import Card from "./components/Card"
import './Home.css'

const Home = () => {
  return (
    <div>
      <h1>Welcome to My App</h1>
      <CCarousel />
      <Card/>
    </div>
  );
};

export default Home;
