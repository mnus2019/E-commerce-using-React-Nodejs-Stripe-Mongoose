
const express = require("express");
const bodyParser = require("body-parser");
const cors = require('./cors');

const config = require("../config");

const stripeSecretKey = config.stripeSecretKey;

const stripe = require('stripe')(stripeSecretKey);


const paymentRouter = express.Router();
 paymentRouter.use(bodyParser.json());


 paymentRouter.route("/"); 
 paymentRouter.route("/pay")
  .options(cors.corsWithOptions, (req, res) => res.sendStatus(200))
  
  .post(cors.corsWithOptions, async (req, res) => {
    const {email,amount} = req.body;
    
    const paymentIntent = await stripe.paymentIntents.create({
        amount: amount,
        currency: 'usd',
        // Verify your integration in this guide by including this parameter
        metadata: {integration_check: 'accept_a_payment'},
        receipt_email:email          
        
      });
  
      res.json({'client_secret': paymentIntent['client_secret']})
  })
  
  

module.exports = paymentRouter;
