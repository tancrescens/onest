const mongoose = require("mongoose");

const PqSchema = mongoose.Schema(
  {
    pq: {
      type: String,
      required: true,
    },
    entityType: {
      type: String,
      required: true,
    },
    issuanceAgency: {
      type: String,
      required: true,
    },
  },
  { timestamp: true }
);

const Pq = mongoose.model("Pq", PqSchema);
module.exports = Pq;
