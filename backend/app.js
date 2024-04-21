const express = require("express");
require("express-async-errors");
const app = express();
const cors = require("cors");

// app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("build/"));

app.use("/api/register", require("./routes/register.js"));
app.use("/api/publication", require("./routes/publication.js"));
app.use("/api/checkout", require("./routes/checkout.js"));
app.use("/api/extend", require("./routes/extend.js"));
app.use("/api/return", require("./routes/return.js"));

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ error: err.message });
});

module.exports = app;
