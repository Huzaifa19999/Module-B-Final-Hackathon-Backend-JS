const express = require("express");
const app = express();
const PORT = 5000


app.get('/',(req,res)=>{
    res.json("Welcome to Module B MERN Final Hackathon")
})


app.listen(PORT,(error)=>{
    if (error) {
        console.log(err)
    } else {
        console.log(`Server is running on port ${PORT}`)
    }
})