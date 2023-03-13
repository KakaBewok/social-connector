const mongoose = require('mongoose');

// schema() berfungsi untuk membuat seperti apa kerangka/struktur data yang akan kita input ke dalam database
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
  avatar: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
// mengkonversi schema() ke dalam model/blueprint
module.exports = User = mongoose.model('user', UserSchema);
