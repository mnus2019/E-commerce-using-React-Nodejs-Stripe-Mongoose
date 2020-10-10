import React, { Component } from "react";
import {  CardImg, CardImgOverlay, CardTitle,
 } from 'reactstrap';

import { Link } from "react-router-dom";
import Contact from "./ContactComponent";
import { Loading } from "./LoadingComponent";

function RenderDirectoryItem({ suites }) {
  return (
    <div>
       <Link to={`/location/${suites._id}`} className="grid">
   
   <CardImg width="100%" src={suites.image} alt={suites.name} />
        <CardImgOverlay>
          <CardTitle className="text-light">{suites.name}</CardTitle>
        </CardImgOverlay>
   
   
        
      
    </Link>
    </div>
  );
}

function PartnerList(props) {
  console.log(props.suites);

  const directory = props.suites.suites
    .filter((suite) => suite._id )
    .map((suites) => {
      return (
        <div key={suites._id} className="col-md-3 m-1" >       
         <RenderDirectoryItem suites={suites} />         
         </div>
        
      );
    });

  if (props.suites.isLoading) {
    return <Loading />;
  }
  if (props.suites.errMess) {
    return <h4 className="col">{props.suites.errMess}</h4>;
  }

  return (
    <div className="container">
   
      <div className="row">{directory}</div>
    </div>
  );
}

class Home extends Component {
  render() {
    //   const directory = this.props.suite.suites.filter(suite=>suite.campsiteId <2).map(suites => {
    //     return (
    //         <div key={suites.id} className="col-md-5 m-1">
    //            <RenderDirectoryItem suites={suites} />
    //         </div>
    //     );
    // });

    return (
      <>
        <div className="jumbotron indexHeader jumbotron-fluid">
          <div className="container">
            <div className="text-center ">
              <h1 className="text-info ">
                <strong>E-commerce</strong>
              </h1>
              <h2 className="text-info">ShopAnyThing</h2>
              <p className="text-dark p-4 mb-5">
                <strong>ShopAnyThing </strong>
                is Link shared office space designed to foster great work and
                build community. Ideal for solo workers, growing your business,
                or starting a new one.
              </p>
              <p>
                <Link
                  to="/member"
                  className="mt-5  col-sm-6 text-dark btn btn-outline-danger btn-lg"
                      role="button"
                >
                  <span>JOIN MEMBER &raquo;</span>
                </Link>
              </p>
            </div>
          </div>
        </div>

        <div></div>
        <div className="container">
          <div className="row ">
            <div className="col-md-4">
              <h2 className="text-info">CONFERENCE ROOMS</h2>
              <p>
                Donec id elit non mi porta gravida at eget metus. Fusce dapibus,
                tellus ac cursus commodo, tortor mauris condimentum nibh, ut
                fermentum massa justo sit amet risus. Etiam porta sem malesuada
                magna mollis euismod. Donec sed odio dui.{" "}
              </p>
              <p>
                <Link className="btn btn-secondary" to="#" role="button">
                  View details &raquo;
                </Link>
              </p>
            </div>
            <div className="col-md-4">
              <h2 className="text-info">BREAKOUT BOOTHS</h2>
              <p>
                Donec id elit non mi porta gravida at eget metus. Fusce dapibus,
                tellus ac cursus commodo, tortor mauris condimentum nibh, ut
                fermentum massa justo sit amet risus. Etiam porta sem malesuada
                magna mollis euismod. Donec sed odio dui.{" "}
              </p>
              <p>
                <Link className="btn btn-secondary" to="#" role="button">
                  View details &raquo;
                </Link>
              </p>
            </div>
            <div className="col-md-4">
              <h2 className="text-info">RELAXED WORKPLACE</h2>
              <p>
                Donec sed odio dui. Cras justo odio, dapibus ac facilisis in,
                egestas eget quam. Vestibulum id ligula porta felis euismod
                semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris.
              </p>
              <p>
                <Link className="btn btn-secondary" to="#" role="button">
                  View details &raquo;
                </Link>
              </p>
            </div>
          </div>
        </div>

        <div className="order mb-0 row-content media">
          <div className="media-body text-left ">
            <img
              src="./img/donuts/donut.jpg"
              className=" mx-3 my-5"
              height="180"
              width="180"
              alt=""
            />
          </div>
          <div className="order2 col-sm-4  text-info">
            <h1>
              Pre-Order Your Almond Or Rasbery Chocolate Croissants From The
              WorkShop Bakery
            </h1>
            <p className="preorder text-light">
              All orders placed by NOON on Friday will be ready for pick up on
              Saturday Morning at 7AM at ANTHEM Coffee in Downtown Puyallup. 210
              West. Pioneer Suite 101 - Puyallup, WA 98371
            </p>
            <a
              role="button"
              className="btn mb-2 btn-outline-primary"
              href="/onlinestore"
            >
              ORDER NOW
            </a>
          </div>
        </div>

        <div className="mt-0 row-content farm ">
          <div className="advertise">
            <h1>FROM FARM TO YOU FRIENDS</h1>
            <h1>
              Patrons more interested in great coffee than in market research
              will also have good reason to order by{" "}
            </h1>
          </div>
        </div>
       

        <Contact />

        <div className="container">
          <div className=" text-center">
            {" "}
            <h1 className="my-5 text-info">OUR FLEXIBLE SUITES</h1>
          </div>       
       
     <PartnerList suites={this.props.suites} />       
          
        </div>
      
      </>
    );
  }
}

export default Home;
