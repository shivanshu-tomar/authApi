const router = require("express").Router();
const User = require("../model/User");
router.post("/register", async (req, res) => {
  console.log(req.body);
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    userName: req.body.userName,
  });
  console.log(user);
  try {
    const savedUser = await user.save();
    res.send(savedUser);
  } catch (err) {
    res.status(400).send(err);
    console.log(err);
  }
});
module.exports = router;
