const express = require("express");

const cors = require("cors");

var app = express();
app.use(cors());

app.use(express.urlencoded({extended:true}))
app.use(express.json())

var useremail = "subbu@gmail.com";
var password = 12345;
app.get("/home", function (req, res) {
  console.log(req.query.email);
  console.log(req.query.password);
  console.log("HOME PAGE RUNNING");
  // res.send("THIS IS HOME PAGE")
  if (useremail == req.query.email && password == req.query.password) {
    res.send(true);
  }else {
    res.send(false);
  }
});

app.post("/home", function (req, res) {
  console.log("HOME PAGE RUNNING POST METHOD");
  res.send("THIS IS HOME PAGE POST METHOD");
});

// app.listen(5000, function () {
//   console.log("SERVER STARTED");
// });
if (process.env.NODE_ENV !== "production") {
  app.listen(5000, function () {
    console.log("SERVER STARTED");
  });
}

module.exports = app;
