import React, { Component } from "react";
import {
  Button,
 
  Col,
  Row

} from "reactstrap";

import { Control, Form, Errors } from "react-redux-form";

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;


class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
     
      text: "",
      isModalOpen: false,
      touched: {
        user: false,
      text: false,
      
      },
    };

    this.handleSubmit = this.handleSubmit.bind(this);

    this.resetForm = this.resetForm.bind(this);
    // this.getMessages = this.getMessages.bind(this);
    this.postMessages = this.postMessages.bind(this);
  }



 

   postMessages=(text,user)=>{
    const newMessage = {
 
   
   
      user,
      text,
    };
  
    return fetch( "newmessage", {
      method: "POST",
      body: JSON.stringify(newMessage),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(
        (response) => {
          if (response.ok) {
            return response;
          } else {
            const error = new Error(
              `Error ${response.status}: ${response.statusText}`
            );
            error.response = response;
            throw error;
          }
        },
        (error) => {
          throw error;
        }
      )
      .then((response) => response.json())
      .then((response) =>  alert("Thank you for your feedback" + JSON.stringify(response))
      )
      .catch((error) => {
        console.log("post Message", error.message);
        alert("Your message Info could not be posted\nError: " + error.message);
      });
}
// getMessages = () => {
//    return fetch("message").then((response) => {
//         return response.json();
//       })
//       .then((data) => {
//         const messadeData=[];
//         messadeData.push(data);
//         console.log(data);
//        messadeData.map(element => {
//        this.setState({
//         user: element.user,
//         text: element.text,
//       });
//        });
//              })
//              .catch(err=>{
//                  console.error(err);
//              })
//   };

  resetForm() {
    this.setState({
      user: "",
      text: "",
    });
    this.toggleModal();
  }
  toggleModal = () => {
    this.setState({ isModalOpen: !this.state.isModalOpen });
  };

  handleSubmit(values) {
    // console.log('Current state is: ' + JSON.stringify(values));
    // alert('Current state is: ' + JSON.stringify(values));
    this.props.getMessage();
    this.postMessages(
    
       
      
      values.user,
      values.text

    );
    
  }
  render() {
    return (
      <div className="container">
        <div className="row  align-items-center">
          <div className="col-12 mt-5">
            <h1 class="text-center mb-5">Send Your Message!!!</h1>
           
          </div>
        
        </div>
        <div className="row ">
          <div className="col-12"></div>
          <div className="col-md-10">
            <Form
              model="feedbackForm"
              onSubmit={(values) => this.handleSubmit(values)}
            >
              <Row className="form-group">
              
                <Col md={10}>
                  <Control.text
                    model=".user"
                    id="user"
                    name="user"
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
                    model=".user"
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
                  <Control.textarea
                    model=".text"
                    id="text"
                    name="text"
                    rows="8"
                    className="form-control"
                  />
                </Col>
              </Row>
             

              <Row className="form-group text-center">
                <Col md={{ size: 4, offset: 2 }}>
                  <Button type="submit" outline color="primary" className="mt-2 mb-5">
                    SEND MESSAGE
                  </Button>
                </Col>
              </Row>
            </Form>
          </div>
        </div>
        <div>
          
        {this.props.messages.messages.map((item, index) => {return (
                          <div >
                            <div className=" text-nowrap text-right">
                            <span className="badge badge-pill badge-warning align-text-top mr-1">
                                {item.user}
                              </span>
                            <span className="badge badge-pill badge-warning align-text-top mr-1">
                                {item.text}
                              </span>
                            </div>
                          </div>
                        );
                      })}
        </div>
      
      </div>
    );
  }
}

export default Message;
