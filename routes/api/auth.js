const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const User = require('../../models/User');

// @route   GET api/auth
// @desc    test route
// @access  public

// auth = middleware dari folder middleware
router.get('/', auth, async (req, res) => {
  try {
    //req.user.id didapat dari proses verifikasi jwt di middleware
    const user = await User.findById(req.user.id).select('-password'); // ('-password') artinya data user dari database akan ditampilkan tanpa data password
    res.json(user);
  } catch (err) {
    console.err(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
