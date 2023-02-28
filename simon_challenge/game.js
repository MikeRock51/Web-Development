let userClickedPattern = []
let gamePattern = [];
let buttonColours = ["red", "blue", "green", "yellow"]

function nextSequence() {
    let randomNumber = Math.floor((Math.random() * 3) + 1);
    return (randomNumber)
}

let randomChosenColour = buttonColours[nextSequence()];

gamePattern.push(randomChosenColour);

switch (randomChosenColour) {
    case "green":
        let green = new Audio("./sounds/green.mp3");
        green.play();
        break;
    case "red":
        let red = new Audio("./sounds/red.mp3");
        red.play();
        break;
    case "yellow":
        let yellow = new Audio("./sounds/yellow.mp3");
        yellow.play();
        break;
    case "blue":
        let blue = new Audio("./sounds/blue.mp3");
        blue.play();
        break;
    default:
        console.log("I no dey");
        break;
}

$("#" + randomChosenColour).fadeOut(50).fadeIn(50)

$(".btn").click(function(event) {
    let userChosenColour = $(this).attr('id');
    userClickedPattern.push(userChosenColour);
    // console.log(userClickedPattern);
})
