import React,{Component} from "react";
import Main from "./components/MainComponent";
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
const stripePromise = loadStripe('publishiableKey');



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
