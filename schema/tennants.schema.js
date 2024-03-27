const mongoose = require("mongoose");

const TennantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
    min: 18,
  },
  occupation: {
    type: String,
    enum: ["student", "full-time"],
    required: true,
  },
  address: mongoose.Schema({
    houseNo: {
      type: Number,
      required: true,
    },
    street: {
      type: String,
      required: true,
    },
    barangay: {
      type: String,
      required: true,
    },
  }),
  dateBoarded: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Tennants", TennantSchema);
