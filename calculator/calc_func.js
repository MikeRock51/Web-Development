exports.add = function (num1, num2) {
    return (num1 + num2);
}

exports.sub = function (num1, num2) {
    return (num1 - num2);
}

exports.div = function(num1, num2) {
    return (num1 / num2);
}

exports.mul = function (num1, num2) {
    return (num1 * num2);
}

exports.calculator = function (num1, num2, op) {
    return op(num1, num2);
}
