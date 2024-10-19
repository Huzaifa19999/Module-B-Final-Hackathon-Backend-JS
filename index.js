const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const authrouter = require("./routes/authroute");
const { default: mongoose } = require("mongoose");

app.get("/", (req, res) => {
  res.json("Welcome to Module B MERN Final Hackathon");
});

app.use("/auth", authrouter);

mongoose.connect(process.env.MONGO_URI)
.then(() => {
  app.listen(process.env.PORT, (error) => {
      console.log(`DB is connected & Server is running on port ${process.env.PORT}`);
  });
})
.catch((err)=>{
  console.log("Database is not connected",err)
})

