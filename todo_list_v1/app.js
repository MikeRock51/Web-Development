const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

let items = [];
let workItems = [];

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res) {
    let today = new Date();
    let options = {
        // year: "numeric",
        month: "long",
        weekday: "long",
        day: "numeric"
    };

    let headText = today.toLocaleString("en-US", options);

    res.render('list', {
        heading: headText,
        newItem: items
    });
});

app.post("/", function(req, res) {
    console.log(req.body);
    item = (req.body.item);
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
