// Dependencies assignment
var express = require("express");
const { MongoClient, ServerApiVersion } = require("mongodb");
const mongoose = require("mongoose");
// const Pq = require(".models/pq.model.js");
var cors = require("cors");

var app = express();
app.use(cors());
app.use(express.json());

// Connecting to MongoDB =============================================
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

app.get("/", (req, res) => {
  res.send("Hello from Node API Server");
});

app.post("/api/pqs", (req, res) => {
  try {
  } catch {
    res.status(500).json({ message: error.message });
  }
});

mongoose
  .connect(
    "mongodb+srv://admin:Crescent00001@cluster0.z1pulot.mongodb.net/pq?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("Connected to database!");
  })
  .catch(() => {
    console.log("Connection failed");
  });

/** 
// Connecting to MongoDB =============================================
// Replace <password> with the password for admin
const uri =
  "mongodb+srv://admin:Crescent00001@cluster0.z1pulot.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function connectToDatabase(dbname) {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db(dbname).command({ ping: 1 });
    console.log(
      `Pinged your deployment. You successfully connected to MongoDB - ${dbname}!`
    );
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
connectToDatabase("entitiesAbbreviationsDB").catch(console.dir);
*/

// Routing =============================================
// Read
