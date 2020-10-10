// import React, { Component } from 'react';
// // import { FaUsers } from 'react-icons/fa';
// import { Link , withRouter} from 'react-router-dom' 

// class Header extends Component {

//   // constructor(props){
//   //   super(props);
//   //   this.state = {
//   //     user: this.props.auth.logins,
      
//   //   };
    
//   // }

//   logOutUser = e => {
//     e.preventDefault();
//     this.props.logoutUser();
//     this.props.history.push("/");
//     // firebase
//     //   .auth()
//     //   .signOut()
//     //   .then(() => {
//     //     navigate('/login');
//     //   });
//   };

  

//   render() {
//     // const { this.props.logins.logins, logOutUser } = this.props.logins.logins;
//     // console.log(this.props.logins.logins);

//     return (
//       <nav className="site-nav family-sans navbar navbar-expand bg-primary navbar-dark higher">
//         <div className="container-fluid">
//           <Link to="/meetinlog" className="navbar-brand">
//             Meeting Log
//           </Link>
//           <div className="navbar-nav ml-auto">
//             {this.props.auth.user && (
//                <Link className="nav-link" to="/home">
//                                    Home
//                                  </Link>
//             )}
//               {this.props.auth.user && (
//                <Link className="nav-link" to="/member" >
//                                    Member
//                                  </Link>
//             )}
//               {this.props.auth.user && (
//                <Link className="nav-link" to="/blog" >
//                                    Blog
//                                  </Link>
//             )}
//               {this.props.auth.user && (
//                <Link className="nav-link" to="/location" >
//                                   Location
//                                  </Link>
//             )}
//               {this.props.auth.user && (
//                <Link className="nav-link" to="/about" >
//                                    About
//                                  </Link>
//             )}
//             {this.props.auth.user && (
//                <Link className="nav-link" to="/onlinestore" >
//                                  online Store
//                                  </Link>
//             )}


//             {!this.props.auth.user && (
//               <Link className="nav-item nav-link" to="">
//                 log in
//               </Link>
//             )}
//             {!this.props.auth.user && (
//               <Link className="nav-item nav-link" to="/register">
//                 register
//               </Link>
//             )}
//             {this.props.auth.user && (
//               <Link
//                 className="nav-item nav-link"
//                 to="/"
//                 onClick={e =>  this.logOutUser(e)}
//               > 
//                 log out
//               </Link>
//             )}
//           </div>
//         </div>
//       </nav>
//     );
//   }
// }

// export default withRouter(Header);




import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

import { Link,withRouter } from "react-router-dom";

function CartQty(props) {
  let qty = 0;
  for (let key in props.cart) {
    qty = qty + props.cart[key].qty;
  }
  return qty;
}

 function CartTotal(props){
  let sum = 0;
  for(let key in props.cart){
        sum = sum + (props.cart[key].product.price * props.cart[key].qty);
  }
  return sum;
}

class Header extends Component {
  constructor(props) {
    super(props);

    this.toggleNav = this.toggleNav.bind(this);

    this.state = {
      isNavOpen: false,
    };
  }

    logOutUser = e => {
    e.preventDefault();
    this.props.logoutUser();
    this.props.history.push("/");
    
  };

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  }

  render() {
    return (
      <React.Fragment>
        <Navbar dark className="bg-info" sticky="top" expand="md">
          <div className="container">
            <NavbarBrand className="mr-auto" >
            <Link to="/home">
            <img
                className="logo"
                src="img/logo/logo.jpg"
                height="30"
                width="30"
                alt="E-Shopey"
              /></Link>
            </NavbarBrand>
            <NavbarToggler onClick={this.toggleNav} />
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav  navbar>
                <NavItem>
                {this.props.auth.user && (
               <Link className="nav-link" to="/home">
                                   Home
                                 </Link>
            )}
                </NavItem>
                <NavItem>
                {(this.props.auth.user || this.props.auth.regUser ) && (
               <Link className="nav-link" to="/member" >
                                 Member
                                 </Link>
            )}
                </NavItem>
                <NavItem>
                {(this.props.auth.user || this.props.auth.regUser )&& (
                  <Link className="nav-link" to="/blog" >
                    Blog
                  </Link>
                )}
                </NavItem>
                <NavItem>
                {(this.props.auth.user || this.props.auth.regUser )&& (
                  <Link className="nav-link" to="/location" >
                    Locations
                  </Link>
                )}
                </NavItem>
                <NavItem>
                {(this.props.auth.user || this.props.auth.regUser ) && (
                  <Link className="nav-link" to="/about" >
                    About
                  </Link>
                )}
                </NavItem>
                <NavItem>
                {(this.props.auth.user || this.props.auth.regUser )&& (
                  <Link className="nav-link" to="/onlinestore" >
                    Online Store
                  </Link>
                )}
                </NavItem>
               
               {""}
               </Nav>
                            <Nav className="ml-auto"  navbar>
                            {(this.props.auth.user || this.props.auth.regUser ) && (            
               <UncontrolledDropdown  nav inNavbar direction="left">
             <DropdownItem className="badge mt-3 badge-pill  b float-left"  >
            
                     <span className="badge badge-pill badge-info float-left">
                         TOTAL: $<CartTotal cart={this.props.cart} />
                        </span>
                     
             </DropdownItem>

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
                  <div className="my-4 mr-4 text-right ">
                  <span  className=" badge badge-pill badge-success ">
                          TOTAL: $ <CartTotal cart={this.props.cart} />
                        </span>
                  </div>
                    <div className="mt-4 mr-4 text-right">
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
                  )}
                <NavItem>
                {!(this.props.auth.user || this.props.auth.regUser ) && (
                  <Link className="nav-link" to="/" >
                    Sign In
                  </Link>
                )}
                </NavItem>
            
                <NavItem>
                {(this.props.auth.user || this.props.auth.regUser ) && (
              <Link
                className="nav-item nav-link"   onClick={(e) =>
                  this.logOutUser(e)}
                to="/"
 
              > 
                log out
              </Link>
            )}
                </NavItem>
                <NavItem>
                {!(this.props.auth.user || this.props.auth.regUser ) && (
                  <Link className="nav-link" to="/register" >
                    Register
                  </Link>
                )}
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
       
      </React.Fragment>
    );
  }
}

 export default withRouter(Header);
