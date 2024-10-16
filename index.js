const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.route.js");
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("Hello from Node API Sever!");
});

const connectDB =
  "mongodb+srv://admin:SvICFXMQ2wUiAr3c@backenddb.ttbn4.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB";
mongoose``
  .connect(connectDB)
  .then(() => {
    ``;
    console.log("Connected to database!");
    app.listen(3000, () => {
      console.log("Sever is running on port 3000");
    });
  })
  .catch(() => {
    console.log("Connection to database failed!");
  });
