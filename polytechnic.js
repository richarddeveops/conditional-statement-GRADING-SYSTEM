function polytechnic() {
    let score = document.getElementById("score").value;
    let displayarea = document.getElementById("displayarea");

    let winSound = new Audio("./sound/win.mp3");
    let failSound = new Audio("./sound/failure.mp3");
    let empty = new Audio("./sound/dude-you-suck.mp3");

    if (score === '') {
        displayarea.innerHTML = "Please enter your score";
        empty.play();
    } else if (score >= 3.50 && score <= 4.00) {
        displayarea.innerHTML = "Grade: Distinction";
        winSound.play();
    } else if (score >= 3.00 && score < 3.50) {
        displayarea.innerHTML = "Grade: Upper Credit";
        winSound.play();
    } else if (score >= 2.50 && score < 3.00) {
        displayarea.innerHTML = "Grade: Lower Credit";
        winSound.play();
    } else if (score >= 2.00 && score < 2.50) {
        displayarea.innerHTML = "Grade: Pass";
        winSound.play();
    } else if (score >= 0.00 && score < 2.00) {
        displayarea.innerHTML = "Grade: Fail";
        failSound.play();
    } else {
        displayarea.innerHTML = "Invalid input, please enter a number between 0.00 and 4.00.";
        empty.play();
    }
}
