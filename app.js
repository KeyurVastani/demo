const express = require('express');
const app = express();
// const jwt = require("jsonwebtoken")
const port = process.ENV || 5000;

app.get("", (req,res)=>{
    res.send("hello World")
})

app.listen(port, ()=>{
    console.log(`server is Working ${port}`);
})
