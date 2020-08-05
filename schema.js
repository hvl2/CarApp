const mongoose = require("mongoose");

let BlogSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: false,
    default: "anonymous",
  },
  createDate: {
    type: Date,
    required: false,
    default: Date.now,
  },
});
