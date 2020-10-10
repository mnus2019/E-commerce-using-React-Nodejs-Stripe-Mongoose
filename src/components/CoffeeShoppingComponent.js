import React, { Component } from "react";
import SearchProduct from "./SearchComponent";
import { Card, CardImg, CardTitle, CardBody, Jumbotron } from "reactstrap";



function Product({ coffee, cart }) {
  return (
    <Card className="iteminscrese bg-light">
      
        <CardImg className="itemImg" width="100%" height="50%" src={coffee.image} alt={coffee.name} />
        <CardBody>
          <CardTitle>{coffee.name}</CardTitle>
          ${coffee.price}
          <div className="text-center">
            <button
              className="btn mt-2 btn-success"
              onClick={(e) => cart(coffee, e)}
            >
             + Add Item
            </button>
          </div>
        </CardBody>
     
    </Card>
  );
}

class CoffeeShopping extends Component {
  render() {
    let order;
    console.log(this.props.coffees.coffees)
    let filteredCoffee = this.props.coffees.coffees;
   
    if (this.props.orderDir === "asc") {
      order = 1;
    } else {
      order = -1;
    }
    filteredCoffee = filteredCoffee
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

    const coffeedirectory = filteredCoffee.map((coffee) => {
      return (
        <div key={coffee.id} className="col-md-3 m-1">
          <Product coffee={coffee} cart={this.props.AddCart} />
        </div>
      );
    });
    return (
      <>
        <Jumbotron fluid>
          <h1 className="text-center">COFFEE</h1>
        </Jumbotron>
        <div className=" text-center">
          <h1 className="mb-5">OUR HOT COFFEE BEVERAGES</h1>
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
          <div className="row">{coffeedirectory}</div>
        </div>
      </>
    );
  }
}
export default CoffeeShopping;
