const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
    today = new Date().getDay();
    day = "";

    switch (today) {
        case 0:
            day = "Sunday";
        case 1:
            day = "Monday";
        case 2:
            day = "Tuesday";
        case 3:
            day = "Wednesday";
        case 4:
            day = "Thursday";
        case 5:
            day = "Friday";
        case 6:
            day = "Saturday";
        default:
            day = "End of Days";
    }

    res.render('list', {dayName: day});
});

app.listen(port, () => console.log("Server is up and running on port " + port));
