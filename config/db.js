const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURL');

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
