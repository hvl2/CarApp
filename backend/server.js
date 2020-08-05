const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

app.listen(PORT, function () {
  console.log("Server has started on Port: 5000");
});
