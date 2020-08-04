import React, { Component } from "react";
import { Jumbotron } from "reactstrap";

//import { Link } from "react-router-dom";

function RenderClothesItem({ clothe,cart }) {
  return (
   <>
   <div className="container">
     <div className="card iteminscrese">
       <div className="card-body bg-light">
         
       <div class="row d-flex  mb-3 align-items-center">
        <div class="col-1 mr-3">
          <button onClick={(e) => cart(clothe, e)} 
          class="btn btn-info">+</button>
        </div>

        <div class="col-sm-4">
          <img class="img-fluid d-block" src={clothe.image} alt="item.name" />
        </div>
        <div class="col">
          <h2 class="text-info">{clothe.name}</h2>
          <p class="mb-0">{clothe.description}</p>

  <div class="h5 float-right">${clothe.price}</div>
        </div>
      </div>

       </div>
    
     </div>
     </div> 
   
   
   </>
  );
}

class ClothesShopping extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clothes: [],
    };
  }
  componentDidMount() {
    fetch('https://hplussport.com/api/products/order/price')
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
          var errMess = new Error(error.message);
          throw errMess;
        }
      )
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          clothes: data,
        });
      })
      .catch((error) => console.log(error.message));
  }
  render() {
    const clothes = this.state.clothes.map((clothe) => {
      return (
        <div key={clothe.id} className=" m-1">
          <RenderClothesItem clothe={clothe}
         cart={this.props.AddCart} />
        </div>
      );
    });

    return (
      <>
        <Jumbotron fluid>
          <h1 className="text-center"> SHOPPING </h1>
        </Jumbotron>
        <div className="container">
          <div class=" text-center">
            {" "}
            <h1 class="my-5 ">LOOK FOR SOMETHING YOU DESERVE</h1>
          </div>

    <div className="col">{clothes}</div>
        </div>
      </>
    );
  }
}

export default ClothesShopping;
