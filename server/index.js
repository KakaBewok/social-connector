const connectDB = require('./config/db');
const express = require('express');
const app = express();
require('dotenv').config();
var cors = require('cors');

app.use(cors()); // Use this after the variable declaration

// connect database
connectDB();

// init middleware
app.use(express.json({ extended: false }));

// mendefiniskan rute (ngambil route dari file yang ada di folder require)
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
