import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/submit", (req, res) => {
  const fullname = req.body.fName + req.body.lName;
  res.render("index.ejs", { numLetter: fullname.length });
});

app.listen(port, () => {
  console.log("Running server on port 3000");
});
