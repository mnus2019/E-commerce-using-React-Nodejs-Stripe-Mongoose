import React, { Component } from 'react';
//import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

import { Link } from "react-router-dom";

function RenderDirectoryItem({suites}) {
  return (
    
  
          <Link to={`/directory/${suites.id}`}>
          <div class="container ">
              <div class="grid">
          <img  width="100%" src={suites.image} alt={suites.name} />
          </div>
          </div>
          
        
          </Link>
        
    
  );
}


class Home extends Component {
 


  render(){
  const directory = this.props.suites.filter(suite=>suite.campsiteId <2).map(suites => {
    return (
        <div key={suites.id} className="col-md-5 m-1">
           <RenderDirectoryItem suites={suites} />
        </div>
    );
});
 
    return (
      <>
          
        <div class="jumbotron indexHeader jumbotron-fluid">
          <div class="container">
            <div class="text-center ">
            <h1 class="text-info "><strong>E-commerce</strong></h1>
                      <h2>ShopAnyThing</h2>
            <p class="text-light p-4 mb-5"><strong>ShopAnyThing </strong> 
               is Link shared office space designed to foster great work 
              and build community. Ideal for solo workers, growing your
               business, or starting a new one.</p>
            <p ><Link to="/member" class="mt-5  col-sm-6 text-light btn btn-outline-secondary btn-lg" href="member.html" role="button"><span>
              JOIN MEMBER &raquo;
            </span></Link></p>
          </div>
          </div>
        </div>
 
      
    <div>  
      </div>
        <div class="container">
        
          <div class="row row-content">
            <div class="col-md-4">
              <h2>CONFERENCE ROOMS</h2>
              <p>Donec id elit non mi porta gravida at eget metus.
                 Fusce dapibus, tellus ac cursus commodo, tortor 
                 mauris condimentum nibh, ut fermentum massa justo 
                 sit amet risus. Etiam porta sem malesuada magna 
                 mollis euismod. Donec sed odio dui. </p>
              <p><Link class="btn btn-secondary" to="#" role="button">View details &raquo;</Link></p>
            </div>
            <div class="col-md-4">
              <h2>BREAKOUT BOOTHS</h2>
              <p>Donec id elit non mi porta gravida at eget metus. 
                Fusce dapibus, tellus ac cursus commodo, tortor
                 mauris condimentum nibh, ut fermentum massa justo
                  sit amet risus. Etiam porta sem malesuada magna
                   mollis euismod. Donec sed odio dui. </p>
              <p><Link class="btn btn-secondary" to="#" role="button">View details &raquo;</Link></p>
            </div>
            <div class="col-md-4">
              <h2>RELAXED WORKPLACE</h2>
              <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis 
                in, egestas eget quam. Vestibulum id ligula porta felis
                 euismod semper. Fusce dapibus, tellus ac cursus commodo,
                  tortor mauris condimentum nibh, ut fermentum massa.</p>
              <p><Link class="btn btn-secondary" href="#" role="button">View details &raquo;</Link></p>
            </div>
          </div>      
  
        </div> 

        <div class="order mb-0  media">
              <div class="media-body text-left ">
                <img src="./img/donuts/donut.jpg" class="my-5"  height="300" width="400" alt=""/>
              </div>
              <div class="order2 col-sm-4  text-info">
                <h1>Pre-Order Your Almond Or 
                  Rasbery Chocolate Croissants From The WorkShop
                Bakery</h1>
                <p class="preorder text-light">All orders placed by NOON on Friday will 
                  be ready for pick up on Saturday Morning at 
                  7AM at ANTHEM Coffee in Downtown Puyallup.
                  210 West. Pioneer Suite 101 - Puyallup, WA 98371</p>
                <a role="button" class="btn mb-2 btn-outline-primary" href="order.html">ORDER NOW</a>
              </div>
            </div>
           
             <div class="mt-0 farm ">
             <div class="advertise">
              <h1  >FROM FARM TO YOU FRIENDS</h1>
              <h1 >Patrons more interested in great coffee than in market
                 research will also have good reason to order by </h1>
             </div>
             </div>
           
            

        <div className="container">
        <div class=" text-center"> <h1 class="mb-5">OUR FLEXIBLE SUITES</h1></div>

        <div className="row">{directory}</div>
        </div>

     
        
        </>
  
       

    );
}
}

export default Home; 