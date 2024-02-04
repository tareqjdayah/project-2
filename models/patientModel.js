const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: [true, "name must be  unique"],
    },
    address: { type: String, required: true },
    mobile: {
      type: String,
      required: true,
      unique: [true, "mobile must be  unique"],
    },
    email: {
      type: String,
      required: true,
      unique: [true, "email must be  unique"],
    },
    birthdate: { type: String, required: true },
    gender: { type: String, enum: ["male", "female"], required: true },
    photo: {
      type: String,
      default:
        "https://source.unsplash.com/random/75×75/?person,face" +
        new Date().getTime(),
    },
    condition: {
      type: String,
      enum: ["normal", "critical"],
      default: "normal",
    },
    tests: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "records",
      },
    ],
  },
  { timestamps: true }
);

const patientModel = mongoose.model("patients", patientSchema);
module.exports = patientModel;
