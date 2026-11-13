function university() {
    let score = document.getElementById("score").value;
    let displayarea = document.getElementById("displayarea");

    let winSound = new Audio("./sound/win.mp3");
    let failSound = new Audio("./sound/failure.mp3");
    let empty = new Audio("./sound/dude-you-suck.mp3");

    if (score === '') {
        displayarea.innerHTML = "Please enter your score";
        empty.play();
    } else if (score >= 4.50 && score <= 5.00) {
        displayarea.innerHTML = "Grade: First Class Honours";
        winSound.play();
    } else if (score >= 3.50 && score < 4.50) { 
        displayarea.innerHTML = "Grade: Second Class Honours (Upper Division)";
        winSound.play();
    } else if (score >= 2.40 && score < 3.50) {
        displayarea.innerHTML = "Grade: Second Class Honours (Lower Division)";
        winSound.play();
    } else if (score >= 1.50 && score < 2.40) {
        displayarea.innerHTML = "Grade: Third Class Honours";
        winSound.play();
    } else if (score >= 1.00 && score < 1.50) {
        displayarea.innerHTML = "Grade: Pass";
        winSound.play();
    } else if (score >= 0.00 && score < 1.00) {
        displayarea.innerHTML = "Grade: Fail / Probation";
        failSound.play();
    } else {
        displayarea.innerHTML = "Invalid input, please enter a number between 0.00 and 5.00.";
        empty.play();
    }
}

/* function university() {
    let score = document.getElementById("score").value;
    let displayarea = document.getElementById("displayarea");

    if (score === '') {
        displayarea.innerHTML = "Please enter your score";
    } else if  (score >=4.50 && score <= 5.00) {
        displayarea.innerHTML = "Grade: First Class Honours";
    } else if (score >= 4.00 && score < 5.00) {
        displayarea.innerHTML = "Grade: Second Class Honours (Upper Division)";
    } else if (score >= 3.00 && score < 4.00) {
        displayarea.innerHTML = "Grade: Second Class Honours (Lower Division)";
    } else if (score >= 2.00 && score < 3.00) {
        displayarea.innerHTML = "Grade: Third Class Honours";
    } else if (score >= 1.00 && score < 2.00) {
        displayarea.innerHTML = "Grade: Pass";
    } else if (score >= 0.00 && score < 1.00) {
        displayarea.innerHTML = "Grade: Fail / Probation";
    } else {
        displayarea.innerHTML = "Invalid input, please enter a number between 0.00 and 5.00.";
    }
    if (score === '') {
        displayarea.innerHTML = "Please enter your score";
    }

} */