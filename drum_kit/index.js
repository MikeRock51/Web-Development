const drumBtn = document.querySelectorAll("button.drum");

for (i = 0; i < drumBtn.length; i++) {
    drumBtn[i].addEventListener('click', function () {
        alert("Won ti click me ooo");
    });
}