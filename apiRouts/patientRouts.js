const express = require("express");

const router = express.Router();

const {
  createPatient,
  getAllPatients,
  getPatientById,
  updatePatient,
  getPatientCriticalConditions,
  removeCritical,
} = require("../service/patientService");

router.route("/conditions").get(getPatientCriticalConditions);
router.route("/").get(getAllPatients).post(createPatient);
router.route("/:patientId").get(getPatientById).put(updatePatient);
router.route("/:patientId/tests/:testId/fix").post(removeCritical);

// const apicache = require("apicache");
// const cache = apicache.middleware;

// const {
//   getpatientByIdValidator,
//   createPatientValidator,
//   deletepatientByIdValidator,
//   updatePatientValidator,
// } = require("../utils/validator/patientValidator");

// const {
//   getPatients,
//   createPatent,
//   getPatientsById,
//   deletePatient,
//   updatePatient,
// } = require("../service/patientService");

// router.route("/").get(getPatients).post(createPatientValidator, createPatent);

// router
//   .route("/:id")
//   .get(getpatientByIdValidator, getPatientsById)
//   .delete(deletepatientByIdValidator, deletePatient)
//   .put(updatePatientValidator, updatePatient);

module.exports = router;
