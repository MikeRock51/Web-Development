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
    const list_id = "b7604a5780"
    const user_email = userInfo.email;
    const user_fname = userInfo.firstName;
    const user_lname = userInfo.lastName;
    const apiServer = ""
    const url = "https://$API_SERVER.api.mailchimp.com/3.0/lists/$list_id/members"


    const data = {
        members: [
            {
                email_address: user_email,
                status: "subscribed",
                merge_fields: {
                  FNAME: user_fname,
                  LNAME: $user_lname
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
