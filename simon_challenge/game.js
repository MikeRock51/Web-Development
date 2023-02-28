let userClickedPattern = []
let gamePattern = [];
let buttonColours = ["red", "blue", "green", "yellow"]

function playSound(sound) {
    switch (sound) {
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
}

function nextSequence() {
    let randomNumber = Math.floor((Math.random() * 3) + 1);
    return (randomNumber)
}

function animatePress(color) {
    $('#' + color).addClass('pressed');

    setTimeout(function() {
        $('#' + color).removeClass('pressed');
    }, 100);
}

let randomChosenColour = buttonColours[nextSequence()];

gamePattern.push(randomChosenColour);
playSound(randomChosenColour);
$("#" + randomChosenColour).fadeOut(50).fadeIn(50)

$(".btn").click(function() {
    let userChosenColour = $(this).attr('id');
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    // console.log(userClickedPattern);
})
