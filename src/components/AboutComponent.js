import React from "react";
import {

  Jumbotron,
} from "reactstrap";
import { Link } from 'react-router-dom';




function About(props) {


  return (
  <>
  
    <Jumbotron fluid>
    <div class="container">
      <div class="text-center ">
      <h1 class="text-info  "><strong>About Us</strong></h1>
   
    </div>
    </div>
  
        </Jumbotron>
  
  <div class="container mb-4">
    <div class="text-center row-about">
      <h1 >ABOUT THE COMPANY</h1>
    <p>Lorem ipsum dolor sit amet consectetur,
       adipisicing elit. Odio excepturi labore ut. 
       Reiciendis eaque quod nihil deserunt cumque! Quis natus,
        ea magnam atque voluptatibus aliquid porro unde ratione. 
        Aperiam, aut?</p>
    </div>
        <div class="row-about text-center">
          <img src="./img/locations/southside jacksonville Blvd.jpg"
           alt="mickennyImage" class="aboutimg img-fluid img-thumbnail"/>
        </div>
  
  <div class="text-center row-about">
<Link to="/member" role="button" class="btn btn-secondary mt-2">Request Tour</Link>
  </div>
</div>
  </>
  );
}

export default About;
