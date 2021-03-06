//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");
const mongoose = require("mongoose");
const { update } = require("lodash");
const dist = require("./distributors");
const prod = require("./products");
const ducers = require("./producers");
const { exit } = require("process");
let updateDistributors = dist.updateDistributors;
let updateProducts = prod.updateProducts;
let updateProducers = ducers.updateProducers;
const OpenTok = reuqire("opentok");
const OT = new OpenTok(process.env.API_KEY, process.env.API_SECRET);


//setting up express
const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

//connecting mongoose
mongoose.connect("url", {
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
  Location: String,
  Items: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
  Info: String,
  Contact: String
});


const Distributor = mongoose.model("Distributor", distributorSchema);

//creating a new schema for each producer
const producerSchema = new mongoose.Schema({
  Picture: String,
  Name: String,
  Location: String,
  Items: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
  Info: String,
  Distributors: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Distributor' }]
});


const Producer = mongoose.model("Producer", producerSchema);


app.get("/updateDB", function(req, res){
  
let newProducts = [];

updateProducts.forEach(function(error, prod){
  // console.log(updateProducts[prod]);
    newProducts.push(new Product(updateProducts[prod]));
    newProducts[prod].save(function(err){
      if (err){
        console.log(err);
      }
    })
})

  

  updateDistributors[0].Items.push(newProducts[0]);
  updateDistributors[1].Items.push(newProducts[1]);
  updateDistributors[2].Items.push(newProducts[5]);
  updateDistributors[3].Items.push(newProducts[3]);
  updateDistributors[4].Items.push(newProducts[2]);
  updateDistributors[5].Items.push(newProducts[2]);
  updateDistributors[6].Items.push(newProducts[5]);
  updateDistributors[7].Items.push(newProducts[4]);
  updateDistributors[8].Items.push(newProducts[5]);
  updateDistributors[9].Items.push(newProducts[0]);
  updateDistributors[10].Items.push(newProducts[4]);
  updateDistributors[11].Items.push(newProducts[5]);
  updateDistributors[12].Items.push(newProducts[4]);
  updateDistributors[13].Items.push(newProducts[3],newProducts[2],newProducts[4]);
  updateDistributors[14].Items.push(newProducts[5]);
  updateDistributors[15].Items.push(newProducts[5]);
  updateDistributors[16].Items.push(newProducts[5]);
  updateDistributors[17].Items.push(newProducts[5]);
  updateDistributors[18].Items.push(newProducts[5]);
  updateDistributors[19].Items.push(newProducts[5]);
  updateDistributors[20].Items.push(newProducts[4]);

  // Product.insertMany(updateProducts, function(error, docs) {
  //   if (!error) {
  //     console.log("Success!")
  //   }
  
  // });

  let newDistributors = [];

  updateDistributors.forEach(function(error, prod){
    // console.log(updateProducts[prod]);
      newDistributors.push(new Distributor(updateDistributors[prod]));
      newDistributors[prod].save(function(err){
        if (err){
          console.log(err);
        }
      })
  })
  updateProducers[0].Items.push(newProducts[4]);
  updateProducers[0].Distributors.push(newDistributors[2],newDistributors[6], newDistributors[9]);

  updateProducers[1].Items.push(newProducts[5]);
  updateProducers[1].Distributors.push(newDistributors[16],newDistributors[19]);

  updateProducers[2].Items.push(newProducts[4]);
  updateProducers[2].Distributors.push(newDistributors[7],newDistributors[10]);

  updateProducers[3].Items.push(newProducts[5]);
  updateProducers[3].Distributors.push(newDistributors[11],newDistributors[17]);

  updateProducers[4].Items.push(newProducts[4]);
  updateProducers[4].Distributors.push(newDistributors[12],newDistributors[13]);

  updateProducers[5].Items.push(newProducts[5]);
  updateProducers[5].Distributors.push(newDistributors[8],newDistributors[11]);

  updateProducers[6].Items.push(newProducts[4]);
  updateProducers[6].Distributors.push(newDistributors[12],newDistributors[20]);

  updateProducers[7].Items.push(newProducts[5]);
  updateProducers[7].Distributors.push(newDistributors[8]);

  updateProducers[8].Items.push(newProducts[4], newProducts[2]);
  updateProducers[8].Distributors.push(newDistributors[12],newDistributors[20],newDistributors[7],newDistributors[4],newDistributors[5]);
  
  updateProducers[9].Items.push(newProducts[5]);
  updateProducers[9].Distributors.push(newDistributors[8]);

  updateProducers[10].Items.push(newProducts[5]);
  updateProducers[10].Distributors.push(newDistributors[15],newDistributors[14],newDistributors[18]);

  updateProducers[11].Items.push(newProducts[5]);
  updateProducers[11].Distributors.push(newDistributors[16],newDistributors[19]); 

  updateProducers[12].Items.push(newProducts[2]);
  updateProducers[12].Distributors.push(newDistributors[13],newDistributors[4],newDistributors[5]); 

  updateProducers[13].Items.push(newProducts[0]);
  updateProducers[13].Distributors.push(newDistributors[0]); 

  updateProducers[14].Items.push(newProducts[0]);
  updateProducers[14].Distributors.push(newDistributors[0]); 

  updateProducers[15].Items.push(newProducts[2]);
  updateProducers[15].Distributors.push(newDistributors[13]); 

  updateProducers[16].Items.push(newProducts[3]);
  updateProducers[16].Distributors.push(newDistributors[3],newDistributors[13]); 

  updateProducers[17].Items.push(newProducts[1]);
  updateProducers[17].Distributors.push(newDistributors[1]);   
  
  updateProducers[18].Items.push(newProducts[3]);
  updateProducers[18].Distributors.push(newDistributors[3]); 

  updateProducers[19].Items.push(newProducts[0]);
  updateProducers[19].Distributors.push(newDistributors[9]);  

  Producer.insertMany(updateProducers, function(error, docs){
    if (!error) {
      console.log("Producer success!");
      res.redirect("/");
    }
    else {
      console.log(error);
    }
  })
});

//setting up the / route to render the home page
app.get("/", function (req, res) {
  res.render("home");
});

//setting up the about page route
app.get("/aboutus", function (req, res) {
  res.render("about");
});

//setting up the upload logo route
app.get("/verifylogo", function (req, res) {
  res.render("verifylogo");
});

//setting up the producers page route
app.get("/producers", function (req, res) {
  Producer.find(function(err, producers){
    res.render("producers", {
        producers: producers,
    });
  })
});

//setting up the distributors page route
app.get("/distributors", function (req, res) {
  Distributor.find(function(err, distributors){
    res.render("distributors", {
        distributors: distributors,
    });
  })
});

app.get("/producer/:producerID", function (req, res){
  const producerID = req.params.producerID;
  Producer.findById(producerID, function(err, producer){
    if (err) {
      console.log(err);
    }
    else {
      var itemsList = [];
      
        Distributor.findOne({_id: producer.Distributors[0]}, function(err, item){
          if (!err){
            itemsList.push(item);
            Product.findOne({_id: producer.Items[0]}, function(error, item1){
              res.render("producer", {
                id: producerID,
                producer:producer,
                distList: itemsList,
                item1: item1
              })
            })
            }
        })
    }
  })
});


app.get("/producer/distributor/:distributorID", function (req, res){
  console.log("made it!");
  const distributorID = req.params.distributorID;
  Distributor.findById(distributorID, function(err, distributor){
    if (err) {
      console.log(err);
    }
    else {
      var itemsList = [];

        Product.findOne({_id: distributor.Items[0]}, function(err, item){
          if (!err){
            itemsList.push(item);
              res.render("distributor", {
                id: distributorID,
                distributor: distributor,
                distList: itemsList
              })
            }
          })
      }
  })
});


let sessions = {};


app.post("/session/:room", (request, response) => {
  const roomName = request.params.room;
  // Check if the session already exists
  if (sessions[roomName]) {
    // Generate the token
    generateToken(roomName, response);
  } else {
    // If the session does not exist, create one
    OT.createSession((error, session) => {
      if (error) {
        console.log("Error creating session:", error);
      } else {
        // Store the session in the sessions object
        sessions[roomName] = session.sessionId;
        // Generate the token
        generateToken(roomName, response);
      }
    });
  }
});

function generateToken(roomName, response) {
  // Configure token options
  const tokenOptions = {
    role: "publisher",
    data: `roomname=${roomName}`
  };
  // Generate token with the Video API Client SDK
  let token = OT.generateToken(
    sessions[roomName],
    tokenOptions
  );
  // Send the required credentials back to to the client
  // as a response from the fetch request
  response.status(200);
  response.send({
    sessionId: sessions[roomName],
    token: token,
    apiKey: process.env.API_KEY
  });
}


// //server listening on port 3000
// app.listen(3000, function () {
//   console.log("Server started on port 3000");
// });




//             distList: itemsList
//               })
//             }
//           })
//       }
//   })
// });

//server listening on port 3000
app.listen(process.env.PORT, function () {
  console.log("Server started on port 3000");
});

