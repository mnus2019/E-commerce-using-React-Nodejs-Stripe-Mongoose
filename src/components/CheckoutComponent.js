import React from "react";


import { Link } from 'react-router-dom';



function CartTotal(props){
  let sum = 0;
  for(let key in props.cart){
        sum = sum + (props.cart[key].product.price * props.cart[key].qty);
  }
  return sum;
}


function Checkout(props) {


  return (
  <>
    <div className="container">
    <h1 className="text-center">Checkout</h1>

    <table className="table table-hover" >
      <caption className="text-right h3">
        <b>  <div className="text-right mr-4 mt-4">
    <Link className="btn  btn-sm btn-outline-info text-dark" to="/paycheckout">PAY:$<CartTotal cart={props.cart}/></Link>
       
       </div> </b>
       
      </caption>
      <thead>
        <tr>
          <th scope="col"></th>
          <th scope="col">Item</th>
          <th scope="col" className="text-center">Qty</th>
          <th scope="col" className="text-right">Price</th>
          <th scope="col" className="text-right">Sub-total</th>
        </tr>
      </thead>
      <tbody>
          {props.cart.map((item,index)=>{return(
        <tr >
          <td className="text-center">
            <div className="btn-group" role="group" aria-label="Basic example">
              <button  onClick={(e) => props.addItem(item, index,e)} className="btn btn-info">+</button>
              <button  onClick={(e) => props.deleteItem(item, index,e)} className="btn btn-outline-info">-</button>
            </div>
          </td>
          <th scope="row">{item.product.name}</th>
          <td className="text-center">{item.qty}</td>
          <td className="text-right">${Number(item.product.price)}</td>
          <td className="text-right">${Number(item.qty * item.product.price)}</td>
        </tr>
        )})}
      </tbody>
    </table>
    <Link className="btn my-2 btn-sm btn-outline-info text-dark" to="/coffeeshopping">Keep Shopping Coffee</Link>
    <Link className="btn my-2 ml-2 btn-sm btn-outline-info text-dark" to="/suiteshopping">Keep Shopping Suites</Link>
   
  </div>
    
  </>
  );
}

export default Checkout;