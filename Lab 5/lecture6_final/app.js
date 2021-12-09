const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));
app.listen(3000, function () {
  console.log("Server running on port 3000");
});

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/sum", function (req, res) {
  const num1 = parseFloat(req.body.num1);
  const num2 = parseFloat(req.body.num2);
  console.log(req.body);
  // const result = num1 + num2;
  console.log(num1 + num2);
  const result = {
    result: num1 + num2,
  };
  res.json(result);
});

app.post("/sub", function (req, res) {
  const num1 = parseFloat(req.body.num1);
  const num2 = parseFloat(req.body.num2);
  console.log(req.body);
  // const result = num1 + num2;
  console.log(num1 - num2);
  const result = {
    result: num1 - num2,
  };
  res.json(result);
});

app.post("/multi", function (req, res) {
  const num1 = parseFloat(req.body.num1);
  const num2 = parseFloat(req.body.num2);
  console.log(req.body);
  // const result = num1 + num2;
  console.log(num1 * num2);
  const result = {
    result: num1 * num2,
  };
  res.json(result);
});

app.post("/div", function (req, res) {
  const num1 = parseFloat(req.body.num1);
  const num2 = parseFloat(req.body.num2);
  console.log(req.body);
  // const result = num1 + num2;
  console.log(num1 / num2);
  const result = {
    result: num1 / num2,
  };
  res.json(result);
});

app.post("/mod", function (req, res) {
  const num1 = parseFloat(req.body.num1);
  const num2 = parseFloat(req.body.num2);
  console.log(req.body);
  // const result = num1 + num2;
  console.log(num1 % num2);
  const result = {
    result: num1 % num2,
  };
  res.json(result);
});

app.post("/exp", function (req, res) {
  const num1 = parseFloat(req.body.num1);
  const num2 = parseFloat(req.body.num2);
  console.log(req.body);
  // const result = num1 + num2;
  console.log(num1 ** num2);
  const result = {
    result: num1 ** num2,
  };
  res.json(result);
});

app.post("/log", function (req, res) {
  const num1 = parseFloat(req.body.num1);
  const num2 = parseFloat(req.body.num2);
  console.log(req.body);
  // const result = num1 + num2;
  console.log(Math.log(num2) / Math.log(num1));
  const result = {
    result: Math.log(num2) / Math.log(num1),
  };
  res.json(result);
});

app.post("/root", function (req, res) {
  const num1 = parseFloat(req.body.num1);
  const num2 = parseFloat(req.body.num2);
  console.log(req.body);
  // const result = num1 + num2;
  console.log(Math.pow(num1, 1 / num2));
  const result = {
    result: Math.pow(num1, 1 / num2),
  };
  res.json(result);
});

app.post("/sin", function (req, res) {
  const num1 = parseFloat(req.body.num1);
  const num2 = parseFloat(req.body.num2);
  console.log(req.body);
  // const result = num1 + num2;
  console.log(Math.sin(num1));
  const result = {
    result: Math.sin(num1),
  };
  res.json(result);
});

app.post("/cosine", function (req, res) {
  const num1 = parseFloat(req.body.num1);
  const num2 = parseFloat(req.body.num2);
  console.log(req.body);
  // const result = num1 + num2;
  console.log(Math.cos(num1));
  const result = {
    result: Math.cos(num1),
  };
  res.json(result);
});

app.post("/tangent", function (req, res) {
  const num1 = parseFloat(req.body.num1);
  const num2 = parseFloat(req.body.num2);
  console.log(req.body);
  // const result = num1 + num2;
  console.log(Math.tan(num1));
  const result = {
    result: Math.tan(num1),
  };
  res.json(result);
});
