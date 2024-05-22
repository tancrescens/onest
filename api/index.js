// Dependencies assignment
var express = require("express");
const { MongoClient, ServerApiVersion } = require("mongodb");
const mongoose = require("mongoose");
const Pq = require("./models/pq.model.js");
var cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

var app = express();
app.use(cors());
app.use(express.json());
//  Configuring express to serve static files from public directory
app.use(express.static("public"));
// app.use("/", express.static("./node_modules/bootstrap/dist/"));

// BACKEND ===================================================================
// Connecting to MongoDB =============================================
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
mongoose
  .connect(process.env.URI)
  .then(() => {
    console.log("Connected to database!");
  })
  .catch(() => {
    console.log("Connection failed");
  });

// Routing ==========================================================
app.get("/", (req, res) => {
  res.send("Hello from Node API Server");
});

// Create PQs
app.post("/api/createPq", async (req, res) => {
  try {
    // console.log("Body: ", req.body);
    // const data = req.body;
    const data = {};

    var newPq = new Pq(data);

    await newPq
      .save()
      .then((savedData) => {
        console.log(`Saved data: ${savedData}`);
      })
      .catch((error) => {
        console.log(error);
      });

    res.json({ msg: "Added into the database" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get All PQs
app.get("/api/pqs", async (req, res) => {
  try {
    const pqListJson = await Pq.find({});
    res.status(200).json(pqListJson);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
