import express from "express"
const app = express();
const port = 3005;

app.get("/", (req, res) => {
    res.send("<h1>Hello, World!</h1>");
});
app.get("/about", (req, res) => {
    res.send("<h1>About me</h1><br><p>My name is depermana and im learning backend with node</p>");
});
app.get("/contact", (req, res) => {
    res.send("<h1>Hello, World!</h1>");
});

app.listen(port, () => {
    console.log("Running server on port 3005");
});

