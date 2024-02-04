const express = require("express");

const router = express.Router();

var cacheService = require("express-api-cache");
var cache = cacheService.cache;

const {
  getpatientByIdValidator,
  createPatientValidator,
  deletepatientByIdValidator,
  updatePatientValidator,
} = require("../utils/validator/patientValidator");

const {
  getPatients,
  createPatent,
  getPatientsById,
  deletePatient,
  updatePatient,
} = require("../service/patientService");

router
  .route("/", cache("10 minutes"))
  .get(getPatients)
  .post(createPatientValidator, createPatent);

router
  .route("/:id")
  .get(getpatientByIdValidator, getPatientsById)
  .delete(deletepatientByIdValidator, deletePatient)
  .put(updatePatientValidator, updatePatient);

module.exports = router;
