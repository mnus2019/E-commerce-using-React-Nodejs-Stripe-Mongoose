import React, { Component } from "react";
import Home from "./HomeComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Member from "./MemberComponent";
import About from "./AboutComponent";
import Blog from "./BlogComponent";
import Location from "./LocationComponent";
import SignIn from "./SigninComponent";
import Checkout from "./CheckoutComponent";
import OnlineStore from "./OnlineStoreComponent";
import { actions } from "react-redux-form";

import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import SuiteShopping from "./SuiteShoppingComponent";
import CoffeeShopping from "./CoffeeShoppingComponent";
import ClothesShopping from "./ClothesShoppingComponent";
import PayCheckout from "./PaycheckoutComponent";
import CampsiteInfo from "./LocationInfoComponent";

import { connect } from "react-redux";
import {
  postComment,
  fetchCoffees,
  fetchSuites,
  fetchLocations,
  postFeedback,
  fetchComments
} from "../redux/ActionCreators";

const mapStateToProps = (state) => {
  return {
    suites: state.Suites,
    coffees: state.Coffees,
    locations: state.Locations,
    comments: state.comments,
  };
};

const mapDispatchToProps = {
  fetchCoffees: () => fetchCoffees(),
  postComment: (campsiteId, rating, author, text) =>
    postComment(campsiteId, rating, author, text),
  fetchSuites: () => fetchSuites(),
  postFeedback: (feedback) => postFeedback(feedback),
  resetFeedbackForm: () => actions.reset("feedbackForm"),
  fetchLocations: () => fetchLocations(),
  fetchComments: () => fetchComments()
};

class Main extends Component {
  componentDidMount() {
    this.props.fetchSuites();
    this.props.fetchCoffees();
    this.props.fetchLocations();
    this.props.fetchComments();
  }
  constructor() {
    super();
    this.state = {
      orderBy: "name",
      orderDir: "asc",
      queryText: "",
      cart: [],
    };

    this.AddCart = this.AddCart.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.addItem = this.addItem.bind(this);
    this.changeorder = this.changeorder.bind(this);
    this.searchOrder = this.searchOrder.bind(this);
  }

  changeorder = (order, dir) => {
    this.setState({
      orderBy: order,
      orderDir: dir,
    });
  };

  searchOrder = (query) => {
    this.setState({
      queryText: query,
    });
  };

  AddCart = (item, e) => {
    e.preventDefault();
    var existing = this.state.cart.filter((p) => p.product.id === item.id);
    if (existing.length) {
      const withoutExisting = this.state.cart.filter(
        (p) => p.product.id !== item.id
      );
      const updatedproduct = { ...existing[0], qty: existing[0].qty + 1 };
      this.setState({
        cart: [...withoutExisting, updatedproduct],
      });
    } else {
      this.setState({
        cart: [...this.state.cart, { product: item, qty: 1 }],
        isopen: !this.state.isopen,
      });
    }
  };

  deleteItem = (item1, index, e) => {
    e.stopPropagation();
    this.setState({
      cart: this.state.cart.filter((item, i) =>
        i === index && item.qty > 1 ? item.qty-- : i !== index
      ),
    });
  };
  addItem = (item1, index, e) => {
    e.stopPropagation();
    this.setState({
      cart: this.state.cart.filter((item, i) =>
        i === index ? item.qty++ : i !== index
      ),
    });
  };

  render() {
    const CampsiteWithId = ({ match }) => {
      console.log(this.props.comments)
      return (
        <CampsiteInfo
          suites={
            this.props.suites.suites.filter(
              (suite) => suite.id === +match.params.campsiteId
            )[0]
          }
          isLoading={this.props.suites.isLoading}
          errMess={this.props.suites.errMess}
          comments={this.props.comments.comments.filter(
            (comment) => comment.campsiteId === +match.params.campsiteId
          )}
          commentsErrMess={this.props.comments.errMess}
          postComment={this.props.postComment}
        />
      );
    };
    return (
      <div>
        <Header
          cart={this.state.cart}
          deleteItem={this.deleteItem}
          addItem={this.addItem}
          cartQty={this.cartQty}
        />
        <TransitionGroup>
          <CSSTransition
            key={this.props.locations.locations.id}
            classNames="page"
            timeout={300}
          >
            <Switch>
              <Route path="/home">
                <Home exact suites={this.props.suites} />
              </Route>
              <Route exact path="/member">
                <Member
                  resetFeedbackForm={this.props.resetFeedbackForm}
                  postFeedback={this.props.postFeedback}
                />
              </Route>
              <Route exact path="/about" component={About} />
              <Route exact path="/blog" component={Blog} />
              <Route exact path="/signin" component={SignIn} />
              <Route exact path="/location">
                <Location locations={this.props.locations} />{" "}
              </Route>
              <Route path="/location/:campsiteId" component={CampsiteWithId} />
              <Route path="/suiteShopping">
                <SuiteShopping
                  AddCart={this.AddCart}
                  suites={this.props.suites}
                  changeorder={this.changeorder}
                  searchOrder={this.searchOrder}
                  orderBy={this.state.orderBy}
                  orderDir={this.state.orderDir}
                  queryText={this.state.queryText}
                />
              </Route>
              <Route path="/coffeeShopping">
                <CoffeeShopping
                  AddCart={this.AddCart}
                  coffees={this.props.coffees}
                  changeorder={this.changeorder}
                  searchOrder={this.searchOrder}
                  orderBy={this.state.orderBy}
                  orderDir={this.state.orderDir}
                  queryText={this.state.queryText}
                />
              </Route>
              <Route path="/checkout">
                <Checkout
                  cart={this.state.cart}
                  deleteItem={this.deleteItem}
                  addItem={this.addItem}
                />
              </Route>
              <Route path="/onlinestore">
                <OnlineStore />
              </Route>
              <Route path="/clothesshopping">
                <ClothesShopping AddCart={this.AddCart} />
              </Route>
              <Route path="/paycheckout">
                <PayCheckout />
              </Route>

              <Redirect to="/home" />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
