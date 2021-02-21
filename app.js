//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");
const mongoose = require("mongoose");
const { update } = require("lodash");


//setting up express
const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

//connecting mongoose
mongoose.connect("mongodb://127.0.0.1/fairtradeDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const productSchema = new mongoose.Schema({
  Name: String,
})

const Product = mongoose.model("Product", productSchema);


//creating a new schema for each distributor
const distributorSchema = new mongoose.Schema({
  Picture: String,
  Name: String,
  Location: Number,
  Items: [productSchema],
  Info: String,
  Contact: String
});


const Distributor = mongoose.model("Distributor", distributorSchema);

//creating a new schema for each producer
const producerSchema = new mongoose.Schema({
  Picture: String,
  Name: String,
  Location: Number,
  Items: [productSchema],
  Info: String,
  Distributors: [distributorSchema]
});


const Producer = mongoose.model("Producer", producerSchema);


app.get("/updateDB", function(req, res){
  
});

//setting up the / route to render the home page
app.get("/", function (req, res) {
  res.render("home");
});

//setting up the about page route
app.get("/aboutus", function (req, res) {
  res.render("about");
});

//setting up the producers page route
app.get("/producers", function (req, res) {
  res.render("producers");
});

//setting up the distributors page route
app.get("/distributors", function (req, res) {
  res.render("distributors");
});

app.get("/producer/:producerID", function (req, res){
  const producerID = req.params.producerID;
  res.render("/producer");
})

app.get("/distributor/:distributorID", function (req, res){
  const distributorID = req.params.distributorID;
  res.render("/distributor");
})

//server listening on port 3000
app.listen(3000, function () {
  console.log("Server started on port 3000");
});
