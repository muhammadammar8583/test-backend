require("dotenv").config();
const express = require("express");
const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send("<h1>Hello World!</h1>");
});

app.get("/linkedin", (req, res) => {
  res.send("Linkedin");
});

app.get("/login", (req, res) => {
  res.send("<h1>Login</h1>");
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
