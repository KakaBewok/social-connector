const connectDB = require('./config/db');
const express = require('express');
const app = express();
require('dotenv').config();

// connect database
connectDB();

// init middleware
app.use(express.json({ extended: false }));

// mendefiniskan rute (ngambil route dari file yang ada di folder require)
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
