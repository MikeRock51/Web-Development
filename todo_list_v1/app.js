const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");
const app = express();
const port = 3000;

const items = [];
const workItems = [];

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res) {
    const headText = date.getDate();

    res.render('list', {
        heading: headText,
        newItem: items
    });
});

app.post("/", function(req, res) {
    const item = (req.body.item);
    items.push(item);

    res.redirect("/");
});

app.get("/work", function(req, res) {
    res.render("list", {
        heading: "Work List",
        newItem: workItems
    });
});

app.post("/work", function(req, res) {
    item = req.body.item;
    workItems.push(item);

    res.redirect("/work");
});


app.listen(port, () => console.log("Server is up and running on port " + port));
