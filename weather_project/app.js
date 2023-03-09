const express = require ("express");
const app = express();
const bodyParser = require ("body-parser");
const https = require("https");
const port = 3000;

app.get('/', function(req, res) {
    const url = "https://api.openweathermap.org/data/2.5/weather?q=Abuja,ng&appid=ef71cbbd570d83e95791c02b1c79715b&units=metric";
    https.get(url, function(response) {
        console.log(response.statusCode);
        response.on("data", function(data) {
            weatherData = JSON.parse(data);
            console.log(weatherData.weather[0].id);
        });
    });
});

app.listen(port, function() {
    console.log("Listening on port " + port);
});
