const express = require("express");
const app = express();
const port = 3001;

const bodyParser = require("body-parser");
const { urlencoded } = require("body-parser");
app.use(urlencoded({ extended: true }));

app.get("/bmi", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/bmi", (req, res) => {
  let h = Number(req.body.h);
  let w = Number(req.body.w);
  let T = req.body.T;
  let Ans = null;
  T === "M"
    ? (Ans = w / Math.sqrt(h))
    : T === "I"
    ? (Ans = (703 * w) / Math.sqrt(h))
    : T === "Null"
    ? res.send("<p>eppidiraaaaaaaaaaaaaaaaaa</p>")
    : null;
  {
    T !== "Null" &&
      res.send(
        `<p>You did ${
          T === "M" ? "Metric" : "Imperial"
        } calculation, your answer is ${Ans}</p>`
      );
  }
});

app.listen(port, () => {
  console.log("App started");
});
