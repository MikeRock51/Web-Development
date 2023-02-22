const drumBtn = document.querySelectorAll("button.drum");

function playDrum(key) {
    switch (key) {
        case 'w':
            // alert("Won ti click me ooo");
            let kick = new Audio('./sounds/kick-bass.mp3');
            kick.play();
            break;
        case 'a':
            let tom1 = new Audio('./sounds/tom-1.mp3');
            tom1.play();
            break;
        case 's':
            let tom2 = new Audio('./sounds/tom-2.mp3');
            tom2.play();
            break;
        case 'd':
            let snare = new Audio('./sounds/snare.mp3');
            snare.play();
            break;
        case 'j':
            let tom3 = new Audio('./sounds/tom-3.mp3');
            tom3.play();
            break;
        case 'k':
            let tom4 = new Audio('./sounds/tom-4.mp3');
            tom4.play();
            break;
        case 'l':
            let crash = new Audio('./sounds/crash.mp3');
            crash.play();
            break;
        default:
            console.log(event);
    }
}

// Listens for buttons clicks
for (i = 0; i < drumBtn.length; i++) {
    drumBtn[i].addEventListener('click', function () {
        // alert("Won ti click me ooo");     
        let clickedPart = this.innerHTML;
        playDrum(clickedPart);
        activeButton(clickedPart);
    }
    );
}

// Listens for keyboard press
document.addEventListener('keydown', function (event) {
    keyEvent = event.key;
    playDrum(keyEvent);
    activeButton(keyEvent);
});

function activeButton(key) {
    activeKey = document.querySelector('.' + key);
    activeKey.classList.add('pressed');

    setTimeout(function() {
        activeKey.classList.remove('pressed');
    }, 100);
}
