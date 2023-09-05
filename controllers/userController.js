const User = require("../model/User");
const jwt = require("jsonwebtoken");

const registerUser = async (req, res) => {
  const { username, password, role } = req.body;

  const userExists = await User.findOne({
    where: { username, password },
  });
  if (userExists) {
    res.status(401).json({ message: "user already exists..." });
    return;
  }

  try {
    const newuser = await User.create({
      username: username,
      password: password,
      role: role,
    });
    if (newuser) {
      const token = jwt.sign(
        { username: newuser.username, role: newuser.role },
        "nigam1234"
      );
      res.status(201).json({
        user_id: newuser.user_id,
        username: newuser.username,
        password: newuser.password,
        role: newuser.role,
        token_id: token,
      });
    }
  } catch (err) {
    res.status(500).json({ message: "unsuccessfull registration..." });
  }
};

const authUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const currUser = await User.findOne({
      // where: { username: user.username },
      where: { username: username },
    });

    if (!currUser) {
      res.status(401).json({ message: "User not Found..." });
      return;
    }

    if (password !== currUser.password) {
      res.status(403).json({ message: "Invalid credentials..." });
    }

    res
      .status(200)
      .send({ message: "user loggedin successfully...", user: currUser });
  } catch (err) {
    res.status(500).send({ message: "unsuccessfull login..." });
  }
};

module.exports = { registerUser, authUser };
