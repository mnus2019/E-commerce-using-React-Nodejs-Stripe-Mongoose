import React, { Component } from "react";
import SearchProduct from "./SearchComponent";
import { Card, CardImg, CardTitle, CardBody, Jumbotron } from "reactstrap";

// import { Link } from "react-router-dom";

function Product({ suite, cart }) {
  return (
    <Card className="iteminscrese bg-light">
      <CardImg
        className="itemImg"
        width="100%"
        src={suite.image}
        alt={suite.name}
      />
      <CardBody>
        <CardTitle>{suite.name}</CardTitle>${suite.price}
        <div className="text-center">
          <button className="btn mt-2 btn-success" onClick={(e) => cart(suite, e)}>
            + Add to Cart
          </button>
        </div>
      </CardBody>
    </Card>
  );
}

class SuiteShopping extends Component {
  render() {
    let order;
    let filteredSuites = this.props.suites.suites;
    if (this.props.orderDir === "asc") {
      order = 1;
    } else {
      order = -1;
    }
    filteredSuites = filteredSuites
      .sort((a, b) => {
        if (
          a[this.props.orderBy].toLowerCase() <
          b[this.props.orderBy].toLowerCase()
        ) {
          return -1 * order;
        } else {
          return 1 * order;
        }
      })
      .filter((eachItem) => {
        return (
          eachItem["name"]
            .toLowerCase()
            .includes(this.props.queryText.toLowerCase()) 
        );
      });

    const suitedirectory = filteredSuites.map((suite) => {
      return (
        <div key={suite.id} className="col-md-3 m-1">
          <Product suite={suite} cart={this.props.AddCart} />
        </div>
      );
    });
    return (
      <>
        <Jumbotron fluid>
          <h1 className="text-center">SUITES</h1>
        </Jumbotron>
        <div className=" text-center">
          <h1 className="mb-5">OUR FLEXIBLE SUITES</h1>
        </div>
        <div className="container">
          <SearchProduct
            orderBy={this.props.orderBy}
            orderDir={this.props.orderDir}
            changeorder={this.props.changeorder}
            searchOrder={this.props.searchOrder}
          />
        </div>

        <div className="container">
          <div className="row">{suitedirectory}</div>
        </div>
      </>
    );
  }
}
export default SuiteShopping;
