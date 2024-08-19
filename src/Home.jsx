import React from "react";
import Common from "./Common";
import img1 from "../src/images/01.svg";

function Home() {
  return (
    <>
      <Common
        name="Grow your Business with "
        imgsrc={img1}
        visit="/service"
        btname="Get Started"
      />
    </>
  );
}

export default Home;
