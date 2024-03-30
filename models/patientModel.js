const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: { type: String, required: true },

  email: {
    type: String,
    required: true,
  },
  mobile_number: {
    type: String,
    required: true,
  },

  address: { type: String, required: true },

  sex: { type: String, required: true },

  date_of_birth: {
    type: String,
  },
  condition: {
    type: String,
    enum: ["normal", "critical"],
    default: "normal",
  },

  // record: [
  //   {
  //     type: mongoose.Schema.ObjectId,
  //     ref: "records",
  //   },
  // ],
});

const patientModel = mongoose.model("patients", patientSchema);
module.exports = patientModel;
