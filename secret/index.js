import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

const secretWord = "iLoveProgramming";
let authorised = false;

app.use(bodyParser.urlencoded({ extended: true }));

const secretCode = (req, res, next) => {
  const userInput = req.body.password;
  if (userInput === secretWord) {
    authorised = true;
  }
  next();
};

app.use(secretCode);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/check", (req, res) => {
  if (authorised) {
    res.sendFile(__dirname + "/public/secret.html");
  } else {
    res.sendFile(__dirname + "/public/index.html");
  }
});

app.listen(port, () => {
    console.log("Running on port 3000");
})
