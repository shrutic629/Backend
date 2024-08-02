const express = require("express");
const colors = require ("colors");
const dotenv = require('dotenv').config();
const morgan = require("morgan");
const path = require('path');
const userdata = require("./utility/userdata.json");
const fileURLtopath = require("url");
// the place where server is launched.
const PORT = 5000;

const app = express();
// properties of express has been transfered into app.
app.use(express.json());
// static files middleware
app.use(express.static(path.resolve(__dirname,"./Public")));
// use: predefined middleware
// info that express get it converts into json through app.

app.get('/userdata',(req,res)=>{
    // res.send("Hello world")})
    res.send(userdata);
    // message:"Welcome to the API";
})

app.get('/contact',(req,res)=>{
    // res.send("Hello world")})
    res.sendFile(path.resolve(__dirname,"./Public","contact.html"));
    // message:"Welcome to the API";
})

app.get('/',(req,res)=>{
    // res.send("Hello world")})
    res.sendFile(path.resolve(__dirname,"./Public","index.html"));
    // message:"Welcome to the API";
})

app.listen(5000,()=>{
    console.log(`server is listening on ${PORT}`.green)
})