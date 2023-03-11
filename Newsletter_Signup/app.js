const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");
const port = 3000;

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/signup.html");
});

app.post("/", function(req, res) {
    const userInfo = req.body;
    const listID = "b7604a5780"
    const userEmail = userInfo.email;
    const userFname = userInfo.firstName;
    const userLname = userInfo.lastName;
    const apiServer = "us9";
    const url = `https://${apiServer}.api.mailchimp.com/3.0/lists/${listID}`;
    const apiKey = "41063f5077d09206c9b6b1e5d74fb077-us9";

    const data = {
        members: [
            {
                email_address: userEmail,
                status: "subscribed",
                merge_fields: {
                  FNAME: userFname,
                  LNAME: userLname
                }
              }
        ]
    }
    const jsonData = JSON.stringify(data);
    const options = {
        method: "POST",
        auth: `MikeRock1:${apiKey}`
    }

    const request = https.request(url, options, function(response) {
        response.on("data", function(data) {
            console.log(JSON.parse(data));
        });

        if (response.statusCode === 200) {
            res.sendFile(__dirname + "/success.html");
        }
        else {
            res.sendFile(__dirname + "/failure.html");
        }
    });

    request.write(jsonData);
    request.end();
});

app.post("/failure", function(req, res) {
    res.redirect("/");
});

app.listen(port, function() {
    console.log(`Server is running on port ${port}`);
});

// API Key
// 6f591ef8bce502c00a802fcd5f24d1d1-us9

// Audience ID
// b7604a5780
