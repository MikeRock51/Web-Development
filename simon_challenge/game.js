let userClickedPattern = [];
let gamePattern = [];
let buttonColours = ["red", "blue", "green", "yellow"];
let level = 0;
let userIndex = 0;

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
            console.log("E didn't dey");
            break;
    }
}

function restartGame() {
    gamePattern = [];
    userClickedPattern = [];
    level = 0;
    userIndex = 0;
}

function nextSequence() {
    let randomNumber = Math.floor((Math.random() * 4));
    level++;
    $("#level-title").text("Level " + level);
    let randomChosenColour = buttonColours[randomNumber];
    playSound(randomChosenColour);
    $("#" + randomChosenColour).fadeOut(50).fadeIn(50)
    gamePattern.push(buttonColours[randomNumber])
    console.log("GAmE " + gamePattern)
    return (randomNumber)
}

function animatePress(color) {
    $('#' + color).addClass('pressed');

    setTimeout(function() {
        $('#' + color).removeClass('pressed');
    }, 100);
}

$(".btn").click(function() {
    let userChosenColour = $(this).attr('id');
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    
    console.log("userC = " + userClickedPattern);
    checkAnswer(userIndex);
})

$(document).keydown(function() {
    if (level === 0) {
        nextSequence();
    }
    // console.log("gameP = " + gamePattern);
    // console.log("userC = " + userClickedPattern);
})

function checkAnswer(currentLevel) {
    // // console.log(userClickedPattern[currentLevel] === gamePattern[currentLevel])
    // console.log("U " + userClickedPattern[currentLevel])
    // console.log("G " + gamePattern[currentLevel])
    if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
        console.log("Ori e wan be");
        userIndex++;
        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(function() {
                    nextSequence();
                }, 1000);
            userClickedPattern = [];
            userIndex = 0;
        }
    }
    else {
        console.log("Dey play!")
        let gameOverSound = new Audio("./sounds/wrong.mp3");
        gameOverSound.play();
        $("body").addClass("game-over");

        setTimeout(function() {
            $("body").removeClass("game-over");
        }, 200);

        $("#level-title").text("Just Dey Play! Press Any Key to Restart")
        // alert("GAME OVER!!!");
        restartGame();
    }
}
