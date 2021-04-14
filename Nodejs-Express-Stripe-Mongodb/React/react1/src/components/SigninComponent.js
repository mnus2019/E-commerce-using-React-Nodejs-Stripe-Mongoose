import React, { Component } from "react";
import { Link, withRouter } from 'react-router-dom' 
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';


import {

  Button,
  Col,
  Row,
} from "reactstrap";


import { Control, LocalForm, Errors } from "react-redux-form";


const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "",
    
      email: "",
     
      touched: {
     
        phoneNum: false,
        email: false,
      },
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }
   responseFacebook = (response) => {
    console.log(response);
    this.props.fetchFacebook(response);
    this.props.history.push("/home");
  
  }

  responseGoogle = (response) => {
    console.log(response);
    this.props.fetchGoogle(response);
    this.props.history.push("/home");
  
  }
 

  handleSubmit(values) {
    // console.log("Current state is: " + JSON.stringify(values));
    // alert("Current state is: " + JSON.stringify(values));

    this.props.loginUser(
    
    
      values.username,
      values.password
    );
   // alert("you successfully logged in: " + JSON.stringify(values));
   this.props.history.push("/home");


   
  }
  render() {
    
    return (
      <div className="container">
       
      
        
        <div className="row  mt-5 row-content">
     
          <div className="text-center  col-10">
          
            <LocalForm className="login-form bg-dark" onSubmit={(values) => this.handleSubmit(values)}>
            <h2>Please SignIn</h2>
               
              <Row className="form-group text-center">
             
                <Col className="text-center" >
                  <Control.text
                    model=".password"
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Password"
                    className="form-control"
                    validators={{
                      required,
                      minLength: minLength(2),
                      maxLength: maxLength(15),
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".password"
                    show="touched"
                    component="div"
                    messages={{
                      required: "Required",
                      minLength: "Must be at least 2 characters",
                      maxLength: "Must be 15 characters or less",
                    }}
                  />
                </Col>
              </Row>
             <Row>
             {/* <Label htmlFor="username" md={2}>
                username
                </Label> */}
                <Col className=" text-center">
                  <Control.text
                    model=".username"
                    id="username"
                    name="username"
                    placeholder="username"
                    className="form-control"
                    validators={{
                      required,
                      minLength: minLength(2),
                      maxLength: maxLength(15),
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".username"
                    show="touched"
                    component="div"
                    messages={{
                      minLength: "Must be at least 2 characters",
                      maxLength: "Must be 15 characters or less",
                    }}
                  />
                </Col>
             </Row>
             <Row className="form-group ">
             <Col className=" text-center">
                  <Button type="submit" outline color="primary" className="my-2 btn btn-lg btn-block">
                    SignIn
                  </Button>
                  <Link to="/register" >
                  <Button  outline color="primary" className="my-2 btn btn-lg btn-block">
                    Register
                  </Button>
                  </Link>
     
                </Col>
                
              </Row>
              <Row className="form-group text-center">
            <Col >
            <FacebookLogin
    appId="1020955051650156"
    autoLoad={false}  
    //cssClass="btnFacebook" 
    callback={this.responseFacebook} />
     </Col>
              </Row>
         <Row className="form-group text-center">
           <Col>
           <GoogleLogin
    clientId="634211974166-7vbh0m20asfh1pk4jehrer361ukq0vnc.apps.googleusercontent.com"
    autoLoad={false}  
    //cssClass="btnFacebook" 
    onSuccess={this.responseGoogle}
   
  />
           </Col>
         </Row>
             
           
             
        
      <p className="mt-5 mb-3 text-muted text-center">&copy; 2020-2021</p>
              
            </LocalForm>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(SignIn);
