const express = require("express");
const app = express();
const port = 5000;

app.get("/", function(req, res) {
    res.send("<h1>Hey I'm Mike, welcome to my about page</h1>");
    // console.log(req);
});

app.get("/contact", function(req, res) {
    res.send("<h3>Contact me on mikerock@gmail.com</h3>");
});

app.get("/about", function(req, res) {
    res.send("<h2>Mike Rock in the building</h2>");
});

app.get("/hobbies", function(req, res) {
    res.send("<ul><li>Football</li><li>Music</li><li>Coding</li></ul>")
})

app.listen(port, function() {
    console.log("Listening on port " + port);
});
