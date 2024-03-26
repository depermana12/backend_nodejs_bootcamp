const fs = require("fs")

// fs.writeFile("message.txt", "Hellow from node js", (err) => {
//     if (err) throw err;
//     console.log('successfully added');
//   });

fs.readFile("message.txt", "utf8", (err, data) => {
    if (err) throw err;
    console.log(data);
  });