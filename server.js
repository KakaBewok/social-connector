const connectDB = require("./config/db");
const express = require("express");
const app = express();
// init middleware
app.use(express.json({ extended: false }));

// connect database
connectDB();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => res.send("API Running..."));

// mendefiniskan rute
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/posts", require("./routes/api/posts"));

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
