const express = require("express");
const app = express();
const connectDB = require("./config/db");
var cors = require("cors");

//connect database
connectDB();

//Init Middleware
app.use(express.json({ extended: false }));
app.use(cors());

//Home route of API Running
app.get("/", (req, res) => {
  res.send("API Running");
});

//TO_DO Define routes

//run the server
app.listen(process.env.port || 1000, () =>
  console.log("Server started on port 1000")
);