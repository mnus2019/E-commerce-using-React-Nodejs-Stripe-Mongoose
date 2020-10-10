import React,{Component} from "react";
import Main from "./components/MainComponent";
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
const stripePromise = loadStripe('pk_test_51HZKUOLQorsKb9OTLvcX9u5So6B4UUrhKgGrN3Iq0NTE2LR8b1jW4BcOjNT1PfgSNguJfw41mJdKiOjFkdUUwCDD00o9sYAVYy');



const store = ConfigureStore();

class App extends Component {
  render(){
  return (
    <Provider store={store}>
        <BrowserRouter>
        <Elements stripe={stripePromise}>
          <div className="App">
            <Main />
          </div>
          </Elements>
        </BrowserRouter>
      </Provider>
  );
}
}
export default App;
