const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

let items = [];

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
    let today = new Date();
    let options = {
        // year: "numeric",
        month: "long",
        weekday: "long",
        day: "numeric"
    };

    let day = today.toLocaleString("en-US", options);

    res.render('list', {
        dayName: day,
        newItem: items
    });
});


app.post("/", function(req, res) {
    item = (req.body.item);
    items.push(item);

    res.redirect("/");
});

app.listen(port, () => console.log("Server is up and running on port " + port));
