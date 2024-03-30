const asyncHandler = require("express-async-handler");

const slugify = require("slugify");

const patientModel = require("../models/patientModel");

const apiError = require("../utils/apiError");

exports.createPatient = asyncHandler(async (req, res, next) => {
  const {
    first_name,
    last_name,
    email,
    mobile_number,
    address,
    sex,
    date_of_birth,
  } = req.body;

  const patient = new patientModel({
    first_name,
    last_name,
    email,
    mobile_number,
    address,
    sex,
    date_of_birth,
  });
  const newpatient = await patient.save();
  res.status(201).json(newpatient);
});
exports.getAllPatients = asyncHandler(async (req, res) => {
  const patinets = await patientModel.find({});
  res.status(200).json(patinets);
});

exports.getPatientById = asyncHandler(async (req, res) => {
  const { patientId } = req.params;
  const patient = await patientModel.findById({ _id: patientId });
  if (!patient) {
    return res.status(404).json({ message: "Patient not found" });
  }
  res.status(200).json(patient);
});

exports.updatePatient = asyncHandler(async (req, res, next) => {
  const { patientId } = req.params;
  const {
    first_name,
    last_name,
    email,
    mobile_number,
    address,
    sex,
    date_of_birth,
  } = req.body;

  const newPatientData = {
    first_name,
    last_name,
    email,
    mobile_number,
    address,
    sex,
    date_of_birth,
  };

  const patient = await patientModel.findByIdAndUpdate(
    { _id: patientId },
    newPatientData,
    { new: true }
  );
  if (!patient) {
    return next(new apiError("this patient not found", 404));
  }
  res.status(200).json(patient);
});
// //@GET Method
// exports.getPatients = asyncHandler(async (req, res) => {
//   const page = req.query.page * 1 || 1;
//   const limit = req.query.limit * 1 || 10;
//   const skip = (page - 1) * limit; // Example: 2 - 1 = 1 => 1*10 = 10 so skip 10 items and get from >=10
//   const patient = await patientModel
//     .find({})
//     .populate({ path: "tests", select: "date , type , reading-_id" });

//   res
//     .status(200)
//     .json({ result: BroadcastChannel.length, page: page, data: patient });
// });

// //@POST Method
// exports.createPatent = asyncHandler(async (req, res, next) => {
//   const { name, address, mobile, email, birthdate, gender, condition } =
//     req.body;
//   const patientData = {
//     name,
//     address,
//     mobile,
//     email,
//     birthdate,
//     gender,
//     condition,
//   };
//   const patient = await patientModel.create(patientData);
//   res.status(201).json({ data: patient });
// });

// //@GET patient By ID Method
// exports.getPatientsById = asyncHandler(async (req, res, next) => {
//   const { id } = req.params;
//   const patient = await patientModel
//     .findById(id)
//     .populate({ path: "tests", select: "date , type , reading-_id" });
//   if (!patient) {
//     return next(new apiError(`not data for this parient id :${id}`), 404);
//   }
//   res.status(200).json({ data: patient });
// });

// //@DELETE patient
// exports.deletePatient = asyncHandler(async (req, res, next) => {
//   const { id } = req.params;
//   const patient = await patientModel.findByIdAndDelete(id);
//   if (!patient) {
//     res.status(404).json({ msg: `no patient with this id :${id}` });
//   }
//   res.status(200).send();
// });

// //@PUT update patient by id
// exports.updatePatient = asyncHandler(async (req, res, next) => {
//   const { id } = req.params;
//   const { name, address, mobile, email, birthdate, gender, condition } =
//     req.body;
//   const patientData = {
//     name,
//     address,
//     mobile,
//     email,
//     birthdate,
//     gender,
//     condition,
//   };
//   const patient = await patientModel.findOneAndUpdate(
//     { _id: id },
//     patientData,
//     { new: true }
//   );
//   if (!patient) {
//     res.status(404).json({ msg: `no patient with this id :${id}` });
//   }
//   res.status(200).json({ data: patient });
// });
