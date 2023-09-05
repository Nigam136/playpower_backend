const Assignment = require("../model/Assignment");
const User = require("../model/User");

const getAssignments = async (req, res) => {
  try {
    const assignments = await Assignment.findAll();
    res.status(200).json(assignments);
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
  }
};

const createAssignment = async (req, res) => {
  const teacher = "zankhana shah";
  const { title, description, duedate } = req.body;

  const teacherdata = await User.findOne({
    where: { username: teacher, role: "teacher" },
  });

  if (!teacherdata) {
    res.status(404).json({ message: "user not found" });
    return;
  }
  // console.log(teacherdata.toJSON());
  const { user_id, username } = teacherdata;
  // console.log(user_id);
  // console.log(username);

  try {
    const createdAss = await Assignment.create({
      teacher_id: user_id,
      teacher_name: username,
      title: title,
      desc: description,
      dueDate: duedate,
    });

    if (createdAss) {
      res.status(201).json({
        ass_id: createdAss.ass_id,
        teacher_id: createdAss.teacher_id,
        teacher_name: createdAss.teacher_name,
        title: createdAss.title,
        desc: createdAss.desc,
        dueDate: createdAss.dueDate,
      });
    }
  } catch (err) {
    res
      .status(500)
      .json({ message: "assignment creation unsuccessfull...", err });
  }
};

const updateAssignments = async (req, res) => {
  const assID = req.params.id;

  const { title, description, duedate } = req.body;

  const updatedData = {
    title: title,
    desc: description,
    dueDate: duedate,
  };

  try {
    const checkAss = await Assignment.findOne({ where: { ass_id: assID } });

    if (!checkAss) {
      res.status(401).json({ message: "assignment not found" });
      return;
    }

    const updatedAss = await Assignment.update(updatedData, {
      where: { ass_id: assID },
      returning: true,
    });
    if (updatedAss) {
      res
        .status(200)
        .send({ message: "updated successfully...", data: updatedAss });
    }
  } catch (err) {
    res.status(500).json({ message: "Internal server eroor", err });
  }
};

const deleteAssignments = async (req, res) => {
  const assID = req.params.id;

  try {
    const checkAss = await Assignment.findOne({ where: { ass_id: assID } });

    if (!checkAss) {
      res.status(401).json({ message: "assignment not found" });
      return;
    }
    const deletedAss = await Assignment.destroy({
      where: { ass_id: assID },
    });

    if (deletedAss) {
      res.status(200).send({ message: "deleted successfully..." });
    }
  } catch (err) {
    res.status(500).json({ message: "Internal server eroor", err });
  }
};

const submitAssignments = async (req, res) => {
  const { assId, userId } = req.body;
  const submissions = [];

  const checkAss = await Assignment.findOne({ where: { ass_id: assId } });
  if (!checkAss) {
    res.status(401).json({ message: "assignment not found" });
    return;
  }

  const submit = {
    assId,
    userId,
  };

  submissions.push(submit);
  res.json({ message: "assignment submitted successfully" });
};

module.exports = {
  getAssignments,
  createAssignment,
  updateAssignments,
  deleteAssignments,
  submitAssignments,
};
