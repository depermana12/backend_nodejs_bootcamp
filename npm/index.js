// import generateName from "sillyname"

// const sillyname = generateName();

// console.log(`My cool name is ${sillyname}`);

// import superheroes from "superheroes"

// const superHeroName = superheroes.random();
// console.log(`My Superheroes name is ${superHeroName}`);

import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    {
      message: "input website url",
      name: "URL",
    },
  ])
  .then((answer) => {
    const url = answer.URL;
    const qrResult = qr.image(url);
    qrResult.pipe(fs.createWriteStream("qrcode.png"));
    fs.writeFile("url.txt", url, (err) => {
        if (err) throw err;
        console.log("Has been saved");
    })
  })
  .catch((err) => {
    if (err.isTtyError) {
      // prompt couldn't be rendered in the current environment
    } else {
      // something else went wrong
    }
  });
