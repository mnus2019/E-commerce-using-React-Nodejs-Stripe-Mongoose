import React, { Component } from "react";
import { withRouter } from 'react-router-dom' 
import {

  
  Col,
  Row,
} from "reactstrap";

import { Control, LocalForm, Errors } from "react-redux-form";
// import { Link } from "react-router-dom";

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;
// const isNumber = (val) => !isNaN(+val);
// const validEmail = (val) =>
//   /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class Register extends Component {
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

  handleSubmit(values) {
    // console.log("Current state is: " + JSON.stringify(values));
    // alert("Current state is: " + JSON.stringify(values));

    this.props.postSignIn(
    
        values.password,
      values.username,
      
      values.firstName,
      values.lastName

    );
   // alert("you successfully logged in: " + JSON.stringify(values));
   this.props.history.push("/home");


   
  }
  render() {
    return (
      <div className="container">
       
        
        
        <div className="row  mt-5 row-content">
          <div className="text-center my-4 col-10">
            <LocalForm className="login-form bg-dark" onSubmit={(values) => this.handleSubmit(values)}>
            <h2>Please Register</h2>
              <Row className="form-group">
              
                <Col >
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
             <Row className="form-group">
           
                <Col>
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
             <Row className="form-group">
           
                <Col >
                  <Control.text
                    model=".firstName"
                    id="firstName"
                    name="firstName"
                    placeholder="firstName"
                    className="form-control"
                    validators={{
                      required,
                      minLength: minLength(2),
                      maxLength: maxLength(15),
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".firstName"
                    show="touched"
                    component="div"
                    messages={{
                      minLength: "Must be at least 2 characters",
                      maxLength: "Must be 15 characters or less",
                    }}
                  />
                </Col>
             </Row>
             <Row className="form-group">
           
                <Col >
                  <Control.text
                    model=".lastName"
                    id="lastName"
                    name="lastName"
                    placeholder="lastName"
                    className="form-control"
                    validators={{
                      required,
                      minLength: minLength(2),
                      maxLength: maxLength(15),
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".lastName"
                    show="touched"
                    component="div"
                    messages={{
                      minLength: "Must be at least 2 characters",
                      maxLength: "Must be 15 characters or less",
                    }}
                  />
                </Col>
             </Row>
             
           
            
              <div class="checkbox mb-3">
        <label className="text-muted">
          <input type="checkbox" value="remember-me"/> Remember me
        </label>
      </div >
      <button className="btn  btn-primary btn-block " type="submit">Register</button>
      <p className="mt-5 mb-3 text-muted text-center">&copy; 2020-2021</p>
              
            </LocalForm>
          </div>
          </div>
          </div>
       
      
    );
  }
}

export default withRouter(Register);
