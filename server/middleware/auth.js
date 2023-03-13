const jwt = require('jsonwebtoken');
require('dotenv').config();

// berfungsi untuk cek body reqnya
module.exports = function (req, res, next) {
  // dapatkan token dari header
  const token = req.header('x-auth-token');
  //  memeriksa jika bukan token
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' }); // 401 = unauthorized
  }

  // jika ada token, maka diverifikasi (antara token dari header dan token dari config jwtSecret)
  try {
    // jika verify berhasil akan mereturn payload
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.user; // {id: user.id}
    next();
  } catch (error) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};
