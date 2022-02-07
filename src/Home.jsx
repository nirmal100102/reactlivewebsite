import React from "react";
import { NavLink } from "react-router-dom";
import web from "../src/images/img1.svg";
import Common from "./Common";

const Home = () => {
    return(
      <>
       <Common name="Grow your buisness with" imgsrc={web} visit= "/Service" btname="Get Started" />
      </>
    );
};
export default Home;