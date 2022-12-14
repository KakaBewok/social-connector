const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const User = require('../../models/User');
const config = require('config');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { check, validationResult } = require('express-validator');

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

// @route   POST api/auth
// @desc    Authenticate user & get token
// @access  public
router.post(
  '/',
  // validasi inputan
  [
    check('email', 'Pelase include a valid email').isEmail(),
    check('password', 'Password is required').exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // ambil req body yang dikirimkan user
    const { email, password } = req.body;

    try {
      // memeriksa apakah user sudah pernah daftar sebelumnya
      let user = await User.findOne({ email });
      if (!user) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Invalid Credentials' }] });
      }

      // membandingkan password dari user dengan password  dari db
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Invalid Credentials' }] });
      }

      // return JWT dengan membawa muatan id dari database
      const payload = {
        user: {
          id: user.id,
        },
      };
      // par1(id.user) - par2(sign) - par3(expTime) - par4(callback)
      jwt.sign(
        payload,
        config.get('jwtSecret'),
        {
          expiresIn: 360000,
        },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

module.exports = router;
