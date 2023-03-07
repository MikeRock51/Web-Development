// import * as calc from __dirname + "/calc_func.js";
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

function add(num1, num2) {
    return (num1 + num2);
}

function sub(num1, num2) {
    return (num1 - num2);
}

function div(num1, num2) {
    return (num1 / num2);
}

function mul(num1, num2) {
    return (num1 * num2);
}

function calculator(num1, num2, op) {
    return op(num1, num2);
}

// console.log(calculator(1, 2, add));

app.listen(port, function () {
    console.log("Listening on port " + port);
});

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
    num1 = Number(req.body.num1);
    num2 = Number(req.body.num2);
    op = req.body.op;

    switch (op) {
        case "+":
            res.send(num1 + " " + op + " " + num2 + " = " +
                calculator(num1, num2, add));
            break;
        case "-":
            res.send(num1 + " " + op + " " + num2 + " = " +
                calculator(num1, num2, sub));
            break;
        case "/":
            res.send(num1 + " " + op + " " + num2 + " = " +
                calculator(num1, num2, div));
            break;
        case "*":
            res.send(num1 + " " + op + " " + num2 + " = " +
                calculator(num1, num2, mul));
            break;
        default:
            res.send("Unsupported operator");
            break;
    }
});
