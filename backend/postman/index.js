import express from "express";
const app = express();
const port = 3003;

app.get("/", (req, res) => {
    res.send("<h1>Home Page</h1>");
});

app.post("/register", (req, res) => {
    res.sendStatus(201);
});

app.put("/user/deddia", (req, res) => {
    res.sendStatus(200);
});

app.patch("/user/deddia", (req, res) => {
    res.sendStatus(200);
});

app.delete("/user/deddia", (req, res) => {
    res.sendStatus(200);
});

app.listen(port, () => {
    console.log("Running server on port 3003");
});