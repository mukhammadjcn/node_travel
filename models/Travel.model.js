const { Schema, model } = require("mongoose");

const travelModel = new Schema({
  title: {
    type: String,
    required: true,
    minlength: 3,
  },
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
    minlength: 3,
  },
});

module.exports = model("Travel", travelModel);
