import React, { Component } from "react";
import {
  Button,
  Label,
  Col,
  Row

} from "reactstrap";
import { Link } from "react-router-dom";

import { Control,LocalForm, Errors } from "react-redux-form";

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;
const isNumber = (val) => !isNaN(+val);
const validEmail = (val) =>
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class Member extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      phoneNum: "",
      email: "",
      agree: false,
      contactType: "By Phone",
      joinType: "Join Member",
      feedback: "",
      isModalOpen: false,
      touched: {
        firstName: false,
        lastName: false,
        phoneNum: false,
        email: false,
      },
    };

    this.handleSubmit = this.handleSubmit.bind(this);

    this.resetForm = this.resetForm.bind(this);
  }
  resetForm() {
    this.setState({
      firstName: "",
      lastName: "",
      email: "",
      phoneNum: "",
      feedback: "",
    });
    this.toggleModal();
  }
  toggleModal = () => {
    this.setState({ isModalOpen: !this.state.isModalOpen });
  };

  handleSubmit(values) {
    // console.log('Current state is: ' + JSON.stringify(values));
    // alert('Current state is: ' + JSON.stringify(values));
  
    this.props.postFeedback(
      values.firstName,
      values.lastName,
      values.phoneNum,
      values.email,
      values.joinType,
      values.agree,
      values.contactType,
     
      values.feedback,

    );
    this.props.resetFeedbackForm();
  }
  render() {
    return (
      <div className="container">
        <div className="row row-content align-items-center">
          <div className="col-12 mt-5">
            <h1 class="text-center text-info mb-5">WE CAN'T WAIT TO MEET YOU!!!</h1>
            <p>
              Every membership at COWORKING & COFFEE begins with a tour of the
              space and a conversation with one of our Community Managers.
            </p>
          </div>
          <div className="col">
            <Link role="button" className="btn btn-link" to="tel:+12065551234">
              <i className="fa fa-phone"></i> 1-206-555-1234
            </Link>
            <br />
            <Link
              role="button"
              className="btn btn-link"
              to="mailto:fakeemail@fakeemail.co"
            >
              <i className="fa fa-envelope-o"></i> campsites@nucamp.co
            </Link>
          </div>
        </div>
        <div className="row ml-4 text-center row-content">
         
          <div className="col-md-10 bg-light   ">
            <LocalForm 
              model="feedbackForm"
              onSubmit={(values) => this.handleSubmit(values)}
            >
              <Row className="form-group mt-3">
              
                <Col md={10}>
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
              </Row>
              <Row className="form-group">
              
                <Col md={10}>
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
          
                <Col md={10}>
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
              
                <Col md={10}>
                  <Control.text
                  type={String}
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
                              
                              <Col md={10}>
                                  <Control.select model=".joinType" name="contactType"
                                      className="form-control">
                                      <option>Join member</option>
                                      <option>Join Tour</option>
                                  </Control.select>
                              </Col>
                          </Row>
              <Row className="form-group">
                                <Col md={{size: 4, offset: 2}}>
                                    <div className="form-check">
                                        <Label check>
                                            <Control.checkbox
                                                model=".agree"
                                                name="agree"
                                                className="form-check-input"
                                            /> {' '}
                                            <strong>May we contact you?</strong>
                                        </Label>
                                    </div>
                                </Col>
                                <Col md={4}>
                                    <Control.select model=".contactType" name="contactType"
                                        className="form-control">
                                        <option>By Phone</option>
                                        <option>By Email</option>
                                    </Control.select>
                                </Col>
                            </Row>
              <Row className="form-group">
                <Label htmlFor="feedback" md={2}>
                  Your Feedback
                </Label>
                <Col md={8}>
                  <Control.textarea
                    model=".feedback"
                    id="feedback"
                    name="feedback"
                    rows="12"
                    className="form-control"
                  />
                </Col>
              </Row>
             

              <Row className="form-group text-center">
                <Col md={{ size: 4, offset: 2 }}>
                  <Button type="submit" outline color="primary" className="mt-2">
                  Submit Form
                  </Button>
                </Col>
              </Row>
            </LocalForm>

            {/* <form action="https://localhost:3443/imageUpload" method="post" encType="multipart/form-data">
              Select a file :
              <input type="file" name="myImg"/><br></br>
              <input type="submit" />
            </form> */}
          </div>
        </div>
      
      </div>
    );
  }
}

export default Member;
