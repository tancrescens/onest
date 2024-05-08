// Dependencies assignment
var express = require("express");
const { MongoClient, ServerApiVersion } = require("mongodb");
const mongoose = require("mongoose");
const Pq = require("./models/pq.model.js");
var cors = require("cors");

var app = express();
app.use(cors());
app.use(express.json());

// Connecting to MongoDB =============================================
app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
mongoose
  .connect(
    "mongodb+srv://admin:Crescent00001@cluster0.z1pulot.mongodb.net/entitiesAbbreviationsDB?retryWrites=true&w=majority&appName=Cluster0"
  )
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
    const data = {
      pq: "MQ",
      entityType: "Mosques",
      issuanceAgency: "Islamic Religious Council of Singapore",
    };

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
