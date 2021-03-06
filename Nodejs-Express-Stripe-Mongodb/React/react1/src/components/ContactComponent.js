import React, { Component } from "react";
import {
Col,Row,
 
  Button,} from "reactstrap";

import { Control, LocalForm, Errors } from "react-redux-form";
//import { Link } from "react-router-dom";

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;
const isNumber = (val) => !isNaN(+val);
const validEmail = (val) =>
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      phoneNum: "",
      email: "",
      agree: false,
      contactType: "By Phone",
      feedback: "",
      touched: {
        firstName: false,
        lastName: false,
        phoneNum: false,
        email: false,
      },
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    console.log("Current state is: " + JSON.stringify(values));
    alert("Current state is: " + JSON.stringify(values));
  }
  render() {
    return (
     <div>
          <div className="about  row-content ">
            <div className="container">
           
            <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
              <Row className="form-group mt-5">
             
                  <Col className="col">
                  <Control.text
                    model=".firstName"
                    id="firstName"
                    name="firstName"
                    placeholder="First Name"
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
                      required: "Required",
                      minLength: "Must be at least 2 characters",
                      maxLength: "Must be 15 characters or less",
                    }}
                  />
                </Col>
             
            
                  <Col className="col">
                  <Control.text
                    model=".lastName"
                    id="lastName"
                    name="lastName"
                    placeholder="Last Name"
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
                      required: "Required",
                      minLength: "Must be at least 2 characters",
                      maxLength: "Must be 15 characters or less",
                    }}
                  />
                </Col>
              </Row>
              <Row className="form-group">
            
                  <Col >
                  <Control.text
                    model=".phoneNum"
                    id="phoneNum"
                    name="phoneNum"
                    placeholder="Phone number"
                    className="form-control"
                    validators={{
                      required,
                      minLength: minLength(10),
                      maxLength: maxLength(15),
                      isNumber,
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".phoneNum"
                    show="touched"
                    component="div"
                    messages={{
                      required: "Required",
                      minLength: "Must be at least 10 numbers",
                      maxLength: "Must be 15 numbers or less",
                      isNumber: "Must be a number",
                    }}
                  />
                </Col>
              </Row>
              <Row className="form-group">
             
                  <Col >
                  <Control.text
                    model=".email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    className="form-control"
                    validators={{
                      required,
                      validEmail,
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".email"
                    show="touched"
                    component="div"
                    messages={{
                      required: "Required",
                      validEmail: "Invalid email address",
                    }}
                  />
                </Col>
              </Row>
              <Row className="form-group">
           
                  <Col >
                  <Control.textarea
                    model=".feedback"
                    placeholder="Place  Your Order Here!!"
                    id="feedback"
                    name="feedback"
                    rows="4"
                    className="form-control"
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Col >
                  <Button className="mb-3" type="submit" color="outline-primary">
                  Submit
                  </Button>
                </Col>
              </Row>
             
            </LocalForm> 
            </div>
            </div>
          </div>
        
      
    );
  }
}

export default Contact;
