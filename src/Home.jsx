import React from "react";
import { NavLink } from "react-router-dom";
import Common from "./Common";
import img from "./image/start-ups.svg";

const Home = () => {
  return (
    <>
      <Common
        name=" Grow your business with "
        img={img}
        visit='/service'
        btname='Get Started'
      />
    </>
  );
};

export default Home;
