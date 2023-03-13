const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 3000;

const calc = require(__dirname + "/calc_func");

app.use(bodyParser.urlencoded({ extended: true }));


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
            res.send(`${num1} ${op} ${num2} = ${calc.calculator(num1, num2, calc.add)}`);
            break;
        case "-":
            res.send(`${num1} ${op} ${num2} = ${calc.calculator(num1, num2, calc.sub)}`);
            break;
        case "/":
            res.send(`${num1} ${op} ${num2} = ${calc.calculator(num1, num2, calc.div)}`);
            break;
        case "*":
            res.send(`${num1} ${op} ${num2} = ${calc.calculator(num1, num2, calc.mul)}`);
            break;
        default:
            res.send("Unsupported operator");
            break;
    }
});
