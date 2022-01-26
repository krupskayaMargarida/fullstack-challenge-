const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const carSchema = new Schema({
  brand: { type: String, required: true },
  model: { type: String, required: true },
  dealer: { type: String, required: true },
  min_milage: { type: Number, required: true },
  max_milage: { type: Number, required: true },
});

const Car = model("Car", carSchema);

module.exports = Car;
