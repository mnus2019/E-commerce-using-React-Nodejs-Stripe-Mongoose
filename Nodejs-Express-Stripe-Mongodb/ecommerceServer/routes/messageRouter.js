const express = require("express");
const bodyParser = require("body-parser");
const Message = require("../models/message");
var https =require("https")

var io = require("socket.io").listen(https)
const authenticate = require("../authenticate");
const cors = require('./cors');

const messageRouter = express.Router();

messageRouter.use(bodyParser.json());

io.on("connection",(socket)=>{
  console.log("IO user connected")
})

messageRouter.route("/");
messageRouter
  .route("/messages")
  .options(cors.corsWithOptions, (req, res) => res.sendStatus(200))
  .get(cors.cors, (req, res, next) => {
    
    Message.find()
    
      .then((message) => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        io.emit("message",message);
        res.json(message);
      })
      .catch((err) => next(err));
  })
  
  
messageRouter
  .route("/newmessage")
  .post(cors.corsWithOptions,   (req, res, next) => {
//     console.log("this is authoriZation");
//     console.log(req.header);
//     const authHeader = req.headers.authorization;
//  const userId = Buffer.from(authHeader.split(' ')[1], 'base64');
//  console.log(userId);
//  const user =users[userId];
//  let msg = {user:user.userName ,text:req.body.message};
io.emit("message",req.body);
    Message.create({user:req.body.user,text:req.body.text})
      .then((message) => {
        console.log("Message Created ", message);
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(message);
      })
      .catch((err) => next(err));
  })
  

module.exports = messageRouter;
