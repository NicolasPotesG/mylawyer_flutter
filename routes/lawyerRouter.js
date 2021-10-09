const express = require("express");
const lawyerController = require("./../controllers/lawyersController");

const router = express.Router();

router
  .route("/")
  .get(lawyerController.getAllLawyers)
  .post(lawyerController.createLawyer);
router
  .route("/:id")
  .get(lawyerController.getLawyer)
  .patch(lawyerController.updateLawyer)
  .delete(lawyerController.deleteLawyer);

module.exports = router;
