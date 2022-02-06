import React from "react";
import { NavLink } from "react-router-dom";
import web from "../src/images/img3.jpeg"
import Common from "./Common";

const About = () => {
    return(
      <>
        <Common name="Welcome to about page" imgsrc={web} visit= "/Contact" btname="Contact Now" />
      </>
    );
};
export default About;