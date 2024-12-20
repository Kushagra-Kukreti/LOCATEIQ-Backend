
const express = require("express");
const app = express();


app.get("/",(req,res)=>{
    res.send("Server started successfully");
})

app.get("/v1/user",(req,res)=>{
    res.send("<h1>Fetching user information....</h1>");
})

const PORT = 4000;

app.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}`)
})