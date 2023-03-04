let userClickedPattern = [];
let gamePattern = [];
let buttonColours = ["red", "blue", "green", "yellow"];
let level = 0;

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
    let randomNumber = Math.floor((Math.random() * 4));
    level++;
    $("#level-title").text("Level " + level);
    let randomChosenColour = buttonColours[randomNumber];
    playSound(randomChosenColour);
    $("#" + randomChosenColour).fadeOut(50).fadeIn(50)
    gamePattern.push(buttonColours[randomNumber])
    return (randomNumber)
}

function animatePress(color) {
    $('#' + color).addClass('pressed');

    setTimeout(function() {
        $('#' + color).removeClass('pressed');
    }, 100);
}

// let randomChosenColour = buttonColours[nextSequence()];
// playSound(randomChosenColour);
// $("#" + randomChosenColour).fadeOut(50).fadeIn(50)

let userIndex = 0;

// while (userIndex < gamePattern.length)
$(".btn").click(function() {
    let userChosenColour = $(this).attr('id');
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    // console.log("gameP = " + gamePattern);
    // console.log("userC = " + userClickedPattern);
    checkAnswer(userClickedPattern.length - 1);
    // nextSequence();
})

$(document).keydown(function() {
    if (level == 0) {
        nextSequence();
    }
    // console.log("gameP = " + gamePattern);
    // console.log("userC = " + userClickedPattern);
})

function checkAnswer(currentLevel) {
    if (userClickedPattern[currentLevel] == gamePattern[currentLevel]) {
        console.log("Ori e wan be");
        console.log("gameP = " + gamePattern);
        console.log("userC = " + userClickedPattern);
        if (level == gamePattern.length) {
            setTimeout(function() {
                nextSequence();
            }, 1000);
            // userClickedPattern = [];
        }
    }
    else {
        alert("GAME OVER!!!")
        userClickedPattern = [];
        gamePattern = [];
        // console.log(currentLevel);
        // console.log("gameP = " + gamePattern[currentLevel]);
        // console.log("userC = " + userClickedPattern[currentLevel]);

        // patternIndex = 0;
        // gamePattern = [];
        // userClickedPattern = [];
        // level = 0;
    }
}