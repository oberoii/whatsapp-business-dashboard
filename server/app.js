const express = require("express");

const app = express();

app.use(express.json());

app.get("/api", (req, res) => {
  res.json({
    success: true,
    message: "WhatsApp Dashboard API Running"
  });
});

module.exports = app;
