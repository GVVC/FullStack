const Express = require("express");
const app = Express();
const port = 3000;

const bodyParser = require("body-parser");

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.use(bodyParser.urlencoded({ extended: true }));

app.post("/", (req, res) => {
  console.log(req.body);
  let num1 = Number(req.body.num1);
  let num2 = Number(req.body.num2);
  let symbol = req.body.do;
  let Ans =
    symbol === "+"
      ? num1 + num2
      : symbol === "-"
      ? num1 - num2
      : symbol === "*"
      ? num1 * num2
      : symbol === "/"
      ? num1 / num2
      : "please check your inputs";
  res.send(`Your answer is ${Ans}`);
});

app.listen(port, () => {
  console.log("server started successfull!");
});
