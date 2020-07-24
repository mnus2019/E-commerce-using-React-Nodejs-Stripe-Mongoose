import React, { Component } from "react";
import {

  Label,
  Col,
  Row,
} from "reactstrap";

import { Control, LocalForm, Errors } from "react-redux-form";
// import { Link } from "react-router-dom";

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;
// const isNumber = (val) => !isNaN(+val);
const validEmail = (val) =>
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

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

  handleSubmit(values) {
    console.log("Current state is: " + JSON.stringify(values));
    alert("Current state is: " + JSON.stringify(values));
  }
  render() {
    return (
      <div className="container">
       

        
        <div className="row  row-content">
          <div className="text-center my-4 col-12">
            <h2>Please SighIn</h2>
           
          </div>
          <div className="col-md-10">
            <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
              <Row className="form-group">
                <Label htmlFor="firstName" md={2}>
                 Password
                </Label>
                <Col md={10}>
                  <Control.text
                    model=".firstName"
                    id="firstName"
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
              </Row>
             
           
              <Row className="form-group">
                <Label htmlFor="email" md={2}>
                  Email
                </Label>
                <Col md={10}>
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
             
              
            </LocalForm>
          </div>
        </div>
      </div>
    );
  }
}

export default SignIn;
