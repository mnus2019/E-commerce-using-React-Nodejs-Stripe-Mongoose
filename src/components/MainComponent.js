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
import { SUITES } from "../shared/suite";
import { COFFEE } from "../shared/coffee";
import { LOCATIONS } from "../shared/location";

import { Switch, Route, Redirect } from "react-router-dom";
import SuiteShopping from "./SuiteShoppingComponent";
import CoffeeShopping from "./CoffeeShoppingComponent";
import ClothesShopping from "./ClothesShoppingComponent";
import PayCheckout from "./PaycheckoutComponent";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      suites: SUITES,
      coffee: COFFEE,
      locations: LOCATIONS,
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

  changeorder(order, dir) {
    this.setState({
      orderBy: order,
      orderDir: dir,
    });
  }

  searchOrder(query) {
    this.setState({
      queryText: query,
    });
  }

  AddCart(item, e) {
    e.preventDefault();
    var existing = this.state.cart.filter((p) => p.product.id === item.id);
    if (existing.length) {
      const withoutExisting = this.state.cart.filter(
        (p) => p.product.id !== item.id
      );
      const updatedproduct = { ...existing[0], qty: existing[0].qty + 1};
      this.setState({
        cart: [...withoutExisting, updatedproduct],
      });
    } else {
      this.setState({
        cart: [...this.state.cart, { product: item, qty: 1 }],
        isopen: !this.state.isopen,
      });
    }
  }

  deleteItem(item1, index, e) {
    e.stopPropagation();
    this.setState({
      cart: this.state.cart.filter((item, i) =>
        i === index && item.qty > 1 ? item.qty-- : i !== index
      ),
    });
  }
  addItem(item1, index, e) {
    e.stopPropagation();
    this.setState({
      cart: this.state.cart.filter((item, i) =>
        i === index ? item.qty++ : i !== index
      ),
    });
  }

  render() {
    return (
      <div>
        <Header
          cart={this.state.cart}
          deleteItem={this.deleteItem}
          addItem={this.addItem}
          cartQty={this.cartQty}
        />
        <Switch>
          <Route
            path="/home"
            render={() => <Home suites={this.state.suites} />}
          />
          <Route path="/member" component={Member} />
          <Route path="/about" component={About} />
          <Route path="/blog" component={Blog} />
          <Route path="/signin" component={SignIn} />
          <Route path="/location">
            <Location locations={this.state.locations} />{" "}
          </Route>
          <Route path="/suiteShopping">
            <SuiteShopping
              AddCart={this.AddCart}
              suites={this.state.suites}
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
              coffee={this.state.coffee}
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
        <Footer />
      </div>
    );
  }
}

export default Main;
