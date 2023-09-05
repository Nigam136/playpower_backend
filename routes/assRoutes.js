const express = require("express");
const {
  getAssignments,
  updateAssignments,
  deleteAssignments,
  createAssignment,
  submitAssignments,
} = require("../controllers/assController");
const router = express.Router();

router.get("/all", getAssignments);
router.post("/create", createAssignment);
router.put("/update/:id", updateAssignments);
router.delete("/delete/:id", deleteAssignments);
router.post("/submit", submitAssignments);

module.exports = router;
