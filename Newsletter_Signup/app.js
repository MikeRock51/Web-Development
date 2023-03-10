const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const port = 3000;

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/signup.html");
});

app.post("/", function(req, res) {
    console.log(req.body);
});

app.listen(port, function() {
    console.log(`Server is running on port ${port}`);
})
