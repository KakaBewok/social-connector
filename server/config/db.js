const mongoose = require('mongoose');
require('dotenv').config();
const db = process.env.MONGODB_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(db);
    console.log('MongoDB Connected...');
  } catch (error) {
    console.error(error.message);
    // keluar dari proses dengan gagal
    process.exit(1);
  }
};
module.exports = connectDB;
