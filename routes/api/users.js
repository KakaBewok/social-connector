const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");

// @route   POST api/users
// @desc    Register User
// @access  public
router.post(
  "/",
  // validasi inputan
  [
    check("name", "Name is Required").not().isEmpty(),
    check("email", "Pelase include a valid email").isEmail(),
    check(
      "password",
      "Please enter a password with 6 or more characters"
    ).isLength({ min: 6 }),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    res.send("User Route");
  }
);

module.exports = router;
