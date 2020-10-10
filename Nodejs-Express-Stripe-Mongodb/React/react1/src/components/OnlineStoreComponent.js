import React from "react";
import {

  Jumbotron,
} from "reactstrap";
import { Link } from 'react-router-dom';




function OnlineStore(props) {


  return (
  <>
  
    <Jumbotron fluid>
    <div className="container">
      <div className="text-center ">
      <h1 className="text-info  "><strong>Online Store</strong></h1>
   
    </div>
    </div>
  
        </Jumbotron>
  
  <div className="container mb-4">
   
       
  
  <div className="text-center row-about">
<Link to="/coffeeShopping" role="button" className="btn btn-danger mr-2 mt-2">PURCHASE HOT COFFEE </Link>
<Link to="/suiteShopping" role="button" className="btn btn-danger ml-2 mt-2">PURCHASE COWORKING SUITE </Link>
<Link to="/clothesShopping" role="button" className="btn btn-danger ml-2 mt-2">ONLINE SHOPPING </Link>
  </div>
</div>
  </>
  );
}

export default OnlineStore;
