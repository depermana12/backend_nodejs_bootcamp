import express from "express";
import ejs from "ejs";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const date = new Date();
  const day = date.getDay();
  console.log(day);

  let dayType = "a weekday";
  let advice = "it's time to work hard";

  if (day === 0 || day === 6) {
    dayType = "a weekend";
    advice = "it's time to rebahan";
  } 

  res.render("index.ejs", {
    dayType,
    advice,
  });
});

app.listen(port, () => {
  console.log("Running server on port 3000");
});
