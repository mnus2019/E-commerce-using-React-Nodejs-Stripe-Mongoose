


import React, {useState} from 'react';
import axios from 'axios';
// MUI Components
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';

import { 
  
  Modal,
  ModalHeader,
  ModalBody,
  
} from "reactstrap";
// stripe
import {useStripe, useElements, CardElement} from '@stripe/react-stripe-js';
// Util imports
import {makeStyles} from '@material-ui/core/styles';
// Custom Components
import CardInput from './CardInput';

const useStyles = makeStyles({
  root: {
    maxWidth: 500,
    margin: '35vh auto',
    backgroundColor:'#A9A9a9'
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'flex-start',
  },
  div: {
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'flex-start',
    justifyContent: 'space-between',
  },
  button: {
    margin: '2em auto 1em',
  },
});



// function CartTotal(props){
//   let sum = 0;
//   for(let key in props.cart){
//         sum = sum + (props.cart[key].product.price * props.cart[key].qty);
//   }
//   return sum;
// }




function PayCheckout(props) {
  const classes = useStyles();
  // State
  const [email, setEmail] = useState('');
 
  const [amount, setAmount] = useState('');
 
  const [isModalOpen, setIsModalOpen] = useState(false);
  const[isModalfailed,setIsModalfailed]  = useState(false);

  const stripe = useStripe();
  const elements = useElements();


  const CartTotal=(props)=>{
    let sum = 0;
    for(let key in props.cart){
          sum = sum + (props.cart[key].product.price * props.cart[key].qty);
    }
    setAmount(sum);
    return sum;
  }
 const toggleModal=()=> {
    setIsModalOpen(!isModalOpen);
  }

  const toggleModalFailed=()=> {
    setIsModalfailed(!isModalfailed);
  }
 

  const handleSubmit = async (props) => {
    if (!stripe || !elements) {
     
      return;
    }
        
    CartTotal(props);

    const res = await axios.post('https:localhost:3443/pay', {email: email,
      amount:amount,  
     
     });

    const clientSecret = res.data['client_secret'];

    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
         
          email: email        
          
        },
      },
    });

    if (result.error) {
      // Show error to your customer (e.g., insufficient funds)
      console.log(result.error.message);
      toggleModalFailed();
    } else {
      // The payment has been processed!
      if (result.paymentIntent.status === 'succeeded') {
        console.log('Your Payment was successfull!');
        console.log(result);
        toggleModal();
      
      }
    }
  };

  return (
    <Card className={classes.root}>
       <div className="py-5 text-center">
           <h2 >Checkout form</h2>
          <p className="lead">You Have Come A long Way Baby!!!</p>
        </div>
      <CardContent className={classes.content}>
        <TextField
          label='Email'
          id='outlined-email-input'
          helperText={`Email you'll recive updates and receipts on`}
          margin='normal'
          variant='outlined'
          type='email'
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
        />
       
        
        <CardInput />
        <div className={classes.div}>
          <Button variant="contained" color="success" className={classes.button}  onClick={() =>
                 
                  handleSubmit(props.cart)}>
          PAY
          </Button>
          <Button variant="contained" disabled color="success" className={classes.button} >
          TOTAL:$<CartTotal cart={props.cart}/>
          </Button>
          <Button variant="contained" color="success" className={classes.button}>
            Subscription
          </Button>
        </div>
      </CardContent>
      <Modal isOpen={isModalOpen} toggle={toggleModal}>
         
            <ModalHeader className="bg-info" toggle={toggleModal}>PAYMENT</ModalHeader>

            <ModalBody>
              <h1>  THANK YOU ! YOU HAVE SUCCESSFULLY PAID.</h1>
         
          <p> Order placed! You will receive an email confirmation.</p>
            </ModalBody>
          
        </Modal>
        <Modal isOpen={isModalfailed} toggle={toggleModalFailed}>
         
         <ModalHeader className="bg-info" toggle={toggleModalFailed}>PAYMENT</ModalHeader>

         <ModalBody>
       
           <h1> SORRY ! YOUR CARD HAS INSUFFICIENT FUNDS.</h1>
           <p>
              Order canceled -- continue to shop around and checkout when you're ready.
         
           </p>
         </ModalBody>
       
     </Modal>
    </Card>
    
  );
}

export default PayCheckout;

















