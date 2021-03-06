import React, { Component } from "react";
import { Loading } from "./LoadingComponent";
import {
  Card,
  CardImg,
  CardText,
  Button,
  CardBody,
  Modal,
  ModalHeader,
  ModalBody,
  Breadcrumb,
  BreadcrumbItem,
  Label,
  Col,
} from "reactstrap";
import { Control, LocalForm, Errors } from "react-redux-form";
import { Link } from "react-router-dom";

function RenderCampsite({ suites }) {
  if (suites) {
    return (
      <div className="col-md-5 m-1">
     
          <Card>
            <CardImg top src={suites.image} alt={suites.name} />
            <CardBody>
              <CardText>{suites.text}</CardText>
            </CardBody>
          </Card>
       
      </div>
    );
  }
  return <div></div>;
}
function RenderComments({ comments, postComment, campsiteId }) {
  if (comments) {
    return (
      <div className="col-md-5 m-1  ">
        <h4>Comments</h4>
      
          {comments.map((comment) => {
            return (
            
                <div key={comment._id}> 
                  <p>
                    {comment.text}
                    <br />
                    -- {comment.author},{" "} {comment.timestamps}
                 
                  </p>
                </div>
              
            );
          })}
       
        <CommentForm campsiteId={campsiteId} postComment={postComment} />
      </div>
    );
  }
  return <div />;
}
function CampsiteInfo(props) {
  if (props.isLoading) {
    return (
      <div className="container">
        <div className="row">
          <Loading />
        </div>
      </div>
    );
  }
  if (props.errMess) {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <h4>{props.errMess}</h4>
          </div>
        </div>
      </div>
    );
  }
  if (props.suites) {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <Breadcrumb>
              <BreadcrumbItem>
                <Link to="/location">Location</Link>
              </BreadcrumbItem>
              <BreadcrumbItem active>{props.suites.name}</BreadcrumbItem>
            </Breadcrumb>
            <h2>{props.suites.name}</h2>
            <hr />
          </div>
        </div>
        <div className="row">
          <RenderCampsite suites={props.suites} />
          <RenderComments
            comments={props.comments}
            postComment={props.postComment}
            campsiteId={props.suites._id}
          />
        </div>
      </div>
    );
  }
  return <div />;
}

class CommentForm extends Component {
  constructor(props) {
    super(props);

    this.toggleModal = this.toggleModal.bind(this);
    this.state = {
      isNavOpen: false,
    };
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }

  handleSubmit(values) {
    this.toggleModal();
    this.props.postComment(
      // this.props.campsiteId,
      values.select,
      values.author,
      values.comment
    );
  }
  render() {
    const required = (val) => val && val.length;
    const maxLength = (len) => (val) => !val || val.length <= len;
    const minLength = (len) => (val) => val && val.length >= len;

    return (
      <div>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
            <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>

            <ModalBody>
              <div className="form-group ">
                <Label htmlFor="rating" md={2}>
                  Rating
                </Label>
                <Col md={10}>
                  <Control.select
                    model=".select"
                    id="rating"
                    name="rating"
                    className="form-control"
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Control.select>
                </Col>
              </div>
              <div className="form-group">
                <Label htmlFor="author" md={2}>
                  Your Name
                </Label>
                <Col md={10}>
                  <Control.text
                    model=".author"
                    id="author"
                    name="author"
                    placeholder="Your Name"
                    className="form-control"
                    validators={{
                      required,
                      minLength: minLength(2),
                      maxLength: maxLength(15),
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".author"
                    show="touched"
                    component="div"
                    messages={{
                      minLength: "Must be at least 2 characters",
                      maxLength: "Must be 15 characters or less",
                    }}
                  />
                </Col>
              </div>
              <div className="form-group">
                <Label htmlFor="comment" md={2}>
                  Comment
                </Label>
                <Col md={10}>
                  <Control.textarea
                    model=".comment"
                    id="comment"
                    name="comment"
                    rows="6"
                    className="form-control"
                  />
                </Col>
              </div>
              <div className="form-group">
                <Col md={{ size: 10 }}>
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </Col>
              </div>
            </ModalBody>
          </LocalForm>
        </Modal>

        <Button outline onClick={this.toggleModal}>
          <i className="fa fa-pencil fa-lg mr-2" />
          Submit Comment
        </Button>
      </div>
    );
  }
}

export default CampsiteInfo;
