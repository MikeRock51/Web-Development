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
    const userInfo = req.body;
    const listID = "b7604a5780"
    const userEmail = userInfo.email;
    const userFname = userInfo.firstName;
    const userLname = userInfo.lastName;
    const apiServer = "us9";
    const url = `https://${apiServer}.api.mailchimp.com/3.0/lists/${listID}/members`

    const data = {
        members: [
            {
                email_address: userEmail,
                status: "subscribed",
                merge_fields: {
                  FNAME: userFname,
                  LNAME: $userLname
                }
              }
        ]
    }
    const jsonData = JSON.stringify(data);


});

app.listen(port, function() {
    console.log(`Server is running on port ${port}`);
})

// API Key
// 6f591ef8bce502c00a802fcd5f24d1d1-us9

// Audience ID
// b7604a5780
