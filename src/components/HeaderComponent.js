import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

import { Link } from "react-router-dom";

function CartQty(props) {
  let qty = 0;
  for (let key in props.cart) {
    qty = qty + props.cart[key].qty;
  }
  return qty;
}

class Header extends Component {
  constructor(props) {
    super(props);

    this.toggleNav = this.toggleNav.bind(this);

    this.state = {
      isNavOpen: false,
    };
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  }

  render() {
    return (
      <React.Fragment>
        <Navbar dark sticky="top" expand="md">
          <div className="container">
            <NavbarBrand className="mr-auto" href="/">
              <img
                className="logo"
                src="logo/logo.jpg"
                height="30"
                width="30"
                alt="Logo"
              />
            </NavbarBrand>
            <NavbarToggler onClick={this.toggleNav} />
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav navbar>
                <NavItem>
                  <Link className="nav-link" to="/home">
                    Home
                  </Link>
                </NavItem>
                <NavItem>
                  <Link className="nav-link" to="/member">
                    Member
                  </Link>
                </NavItem>
                <NavItem>
                  <Link className="nav-link" to="/blog">
                    Blog
                  </Link>
                </NavItem>
                <NavItem>
                  <Link className="nav-link" to="/location">
                    Locations
                  </Link>
                </NavItem>
                <NavItem>
                  <Link className="nav-link" to="/about">
                    About
                  </Link>
                </NavItem>
                <NavItem>
                  <Link className="nav-link" to="/onlinestore">
                    Online Store
                  </Link>
                </NavItem>
                <NavItem>
                  <Link className="nav-link" to="/signin">
                    SignIn
                  </Link>
                </NavItem>
               {""}
               <UncontrolledDropdown  nav inNavbar direction="left">
             <DropdownToggle className="btn btn-success" >$</DropdownToggle>

                  <DropdownMenu>
                    <DropdownItem>
                      <div className="my-2">
                        <span className="badge badge-pill badge-success float-right">
                          cartQty: <CartQty cart={this.props.cart} />
                        </span>
                      </div>
                    </DropdownItem>
                    <DropdownItem>
                      {this.props.cart.map((item, index) => {
                        return (
                          <div key={item.product.id}>
                            <div className="dropdown-item,index-text text-nowrap text-right">
                              <span className="badge badge-pill badge-warning align-text-top mr-1">
                                {item.qty}
                              </span>
                              <span> {item.product.name}</span>
                              <span>
                                {" "}
                                <b>${item.qty * Number(item.product.price)} </b>
                              </span>
                              <button
                                onClick={(e) =>
                                  this.props.deleteItem(item, index, e)
                                }
                                className="badge badge-danger text-white"
                              >
                                -
                              </button>
                              <button
                                onClick={(e) =>
                                  this.props.addItem(item, index, e)
                                }
                                className="badge badge-success text-white"
                              >
                                +
                              </button>
                            </div>
                          </div>
                        );
                      })}
                    </DropdownItem>
                    <div className="mt-2 mr-4 text-right">
                      <Link
                        role="button"
                        className="btn btn-success"
                        to="/checkout"
                      >
                        Checkout
                      </Link>
                    </div>
                  </DropdownMenu>
                </UncontrolledDropdown> 
              </Nav>
            </Collapse>
          </div>
        </Navbar>
      </React.Fragment>
    );
  }
}

export default Header;
