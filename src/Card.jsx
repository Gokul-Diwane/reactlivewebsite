import React from "react";
import { NavLink } from "react-router-dom";
import img2 from "../src/images/app.jpg";

function Card(props) {
  return (
    <>
      <div className="col-md-4 col-10 mx-auto w-30">
        <div class="card" >
          <img src={props.imgsrc} class="card-img-top hover-zoom" alt={props.imgsrc} style={{transition: 'transform 0.3s ease'}}/>
          <div class="card-body">
            <h5 class="card-title font-weight-bold">{props.title}</h5>
            <p class="card-text">
              {props.intro}
            </p>
            <NavLink to="#" class="btn btn-outline-primary">
              Know More 
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
