const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const db_service = require("./db_service");
dotenv.config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//create
app.post("/addUser", (req, res) => {
  let data = req.body;
  const { userName, firstName, lastName, email, age, phoneNumber, roleId } =
    data;
  if (age > 20) {
    res.send({ user: "valide" });
  } else {
    res.json({ user: "inValid" });
  }
});

//read
app.get("/getUser", (req, res) => {
  res.json({ working: "success" });
});

//update

//delete

app.listen(process.env.PORT, () => {
  console.log("server started");
});
