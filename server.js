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

//define routes
app.use("/users", require("./routes/users"));
app.use("/auth", require("./routes/auth"));
app.use("/seller", require("./routes/seller"));
app.use("/rider", require("./routes/rider"));
app.use("/vendor", require("./routes/vendor"));

//run the server
const port = process.env.port || 1210;
app.listen(port, () =>
  console.log(`Server started on port ${port}`)
);
