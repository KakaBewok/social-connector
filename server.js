const connectDB = require('./config/db');
const express = require('express');
const app = express();
const path = require('path');

// connect database
connectDB();

// init middleware
app.use(express.json({ extended: false }));

// app.get('/', (req, res) => res.send('API Running...'));

// mendefiniskan rute (ngambil route dari file yang ada di folder require)
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));

// serve static aset in production
if (process.env.NODE_ENV === 'production') {
  // set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
