function university() {
    let score = document.getElementById("score").value;
    let displayarea = document.getElementById("displayarea");

    if (score === '') {
        displayarea.innerHTML = "Please enter your score";
    } else if (score >= 4.50 && score <= 5.00) {
        displayarea.innerHTML = "Grade: First Class Honours";
    } else if (score >= 3.50 && score < 4.50) {
        displayarea.innerHTML = "Grade: Second Class Honours (Upper Division)";
    } else if (score >= 2.40 && score < 3.50) {
        displayarea.innerHTML = "Grade: Second Class Honours (Lower Division)";
    } else if (score >= 1.50 && score < 2.40) {
        displayarea.innerHTML = "Grade: Third Class Honours";
    } else if (score >= 1.00 && score < 1.50) {
        displayarea.innerHTML = "Grade: Pass";
    } else if (score >= 0.00 && score < 1.00) {
        displayarea.innerHTML = "Grade: Fail / Probation";
    } else {
        displayarea.innerHTML = "Invalid input, please enter a number between 0.00 and 5.00.";
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