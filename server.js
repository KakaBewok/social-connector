const connectDB = require('./config/db');
const express = require('express');
const app = express();

// connect database
connectDB();

// init middleware
app.use(express.json({ extended: false }));

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => res.send('API Running...'));

// mendefiniskan rute (ngambil route dari file yang ada di folder require)
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
