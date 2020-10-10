import React from 'react';
import { Link } from "react-router-dom";


function Footer(props) {
 
    return (
        <>
     
       <footer className="bottomfooter ">
        <div className="social-media  text-center">
          <a className="text-light btn btn-social-icon btn-instagram" href="http://instagram.com/"><i className="fa fa-instagram"></i></a>{" "}
          <a className="text-light btn btn-social-icon btn-facebook" href="http://facebook.com/"><i className="fa fa-facebook"></i></a>{" "}
          <a className="text-light btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter"></i></a>{" "}
          <a className="text-light btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube"></i></a>{" "}
      </div>
         
         
        <nav className="bottomnav">
          <div className="">
          <ul>
            <li><Link to="/home">HOME |</Link></li>
            <li><Link to="/member">MEMEBER |</Link></li>
            <li><Link to="/suiteShopping">SUITES |</Link></li>
            <li><Link to="/onlinestore">ORDER |</Link></li>
            <li><Link to="/location">LOCATIONS |</Link></li>
            <li><Link to="/about">ABOUT |</Link></li>
            <li><Link to="/">SIGN IN </Link></li>
          </ul>
        </div>
       
       
        </nav>

        <div className="site-footer">
          <div className="container">
              <div className="text-center">
                 
                  <div className="col">
                      <a role="button" className="btn btn-link" href="tel:+12065551234"><i className="fa fa-phone"></i> 1-206-555-1234</a><br />
                      <a role="button" className="btn btn-link" href="mailto:campsites@nucamp.co"><i className="fa fa-envelope-o"></i> campsites@nucamp.co</a>
                  </div>
             </div>
          </div>
        </div>
        
 
         
    </footer> 
        </>
    )
}

export default Footer;