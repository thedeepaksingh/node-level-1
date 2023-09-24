const express = require("express");
const userLogin = require("../ang/v1/routes/loginRoutes");
require("dotenv").config();
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 2299;
app.use(bodyParser.json());

//validate users
app.use("/ang/v1/api/userCred", userLogin);

app.listen(PORT, () => {
  console.log(`Server is Running at http://localhost:${PORT}`);
});
