import React from "react";
import Common from "./Common";
import img2 from "../src/image/1_zJ6BlIllcCHK7htO9pknuQ.png";
import { useHistory } from "react-router-dom";

const About = () => {
  // const history=useHistory();
  return (
    <>
      <Common
        name="Overview of the React documentation and related resources."
        img={img2}
        visit="/contact"
        btname="Contact"
      />
    </>
  );
};

export default About;
