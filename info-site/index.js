const express = require("express");
const app = express();
const path = require("path");

const myLogger = (req, res, next) => {
  console.log("Request IP: " + req.ip);
  console.log("Request Method: " + req.method);
  console.log("Request date: " + new Date());

  next();
}

app.use(myLogger);

app.get("/", (req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.statusCode = 200;
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/about", (req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.statusCode = 200;
  res.sendFile(path.join(__dirname, "about.html"));
});

app.get("*", (req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.statusCode = 404;
  res.sendFile(path.join(__dirname, "404.html"));
});

app.listen(8080, () => {
  console.log(`App listening on port 8080`);
});
