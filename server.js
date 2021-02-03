const express = require('express');
const app = express();


app.get("/", (req, res) => {
    res.send("Hello World");
})

app.post("/", (req, res) => {
    console.log("req.body", req.body);
    const { data } = req.body;
})
app.listen(3000, () => {
    console.log("Server listening on port 3000")
});


