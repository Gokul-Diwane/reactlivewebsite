import React from "react";
import Common from "./Common";
import service from "../src/images/01.svg";
import { NavLink } from "react-router-dom";

function About() {
  return (
    <>
      <Common
        name="Welcome to About Page "
        imgsrc={service}
        visit="/contact"
        btname="Contact Now"
      />
    </>
  );
}

export default About;
