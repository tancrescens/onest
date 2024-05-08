const mongoose = require("mongoose");

const PqSchema = mongoose.Schema(
  {
    pq: {
      type: String,
    },
    entityType: {
      type: String,
    },
    issuanceAgency: {
      type: String,
    },
  },
  { timestamp: true }
);

const Pq = mongoose.model("pqs", PqSchema);
module.exports = Pq;
