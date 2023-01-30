const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');
const User = require('../../models/User.js');

// @route   POST api/users
// @desc    Register User
// @access  public
router.post(
  '/',
  // validasi inputan
  [
    check('name', 'Name is Required').not().isEmpty(),
    check('email', 'Pelase include a valid email').isEmail(),
    check(
      'password',
      'Please enter a password with 6 or more characters'
    ).isLength({ min: 6 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);

    // memeriksa hasil validasi
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // ambil dengan cara destruct req body yang dikirimkan user
    const { name, email, password } = req.body;

    try {
      // memeriksa apakah user sudah pernah daftar sebelumnya (gak bisa pake email yang sama)
      let user = await User.findOne({ email });
      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'User already exist' }] });
      }
      // mengambil gravatar user dari email user, jika user belum ada
      const avatar = gravatar.url(email, {
        // s=size, ukuran foto
        s: '200',
        // r=rating, kualitas foto
        r: 'pg',
        // d=default, jika foto error akan ditampilkan apa, jika mm maka foto kosong
        d: 'mm',
      });
      // membuat instansiasi object yang berisi request dari user diatas
      user = new User({
        name,
        email,
        avatar,
        password,
      });

      // encrypt password
      // angka 10 merupakan putaran acak password, semakin besar semakin aman, tapi semakin lambat
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password.toString(), salt);
      // menyimpan password di db
      await user.save();

      // membuat JWT dengan membawa muatan id dari database
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
