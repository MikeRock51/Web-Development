const express = require ("express");
const app = express();
const bodyParser = require ("body-parser");
const https = require("https");
const port = 3000;

app.get('/', function(req, res) {
    const url = "https://api.openweathermap.org/data/2.5/weather?q=Osun,ng&appid=ef71cbbd570d83e95791c02b1c79715b&units=metric";
    https.get(url, function(response) {
        console.log(response.statusCode);
        response.on("data", function(data) {
            weatherData = JSON.parse(data);
            const temperature = weatherData.main.temp;
            const description = weatherData.weather[0].description;
            const city = weatherData.name;
            const icon = `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;
            console.log(icon);
            res.write(`<p>The weather currently shows ${description}</p>`);
            res.write(`<h1>The temperature in ${city} is ${temperature} degree celcius</h1>`);
            res.write(`<img src=${icon} alt="Weather Icon">`)
            res.send();
        });
    });
});

app.listen(port, function() {
    console.log("Listening on port " + port);
});
