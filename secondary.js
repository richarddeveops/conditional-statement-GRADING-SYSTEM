function secondary(){
    let score = document.getElementById('score').value
    let displayarea = document.getElementById('displayarea')

    let winSound = new Audio("./sound/win.mp3");
    let failSound = new Audio("./sound/failure.mp3");
    let empty = new Audio("./sound/dude-you-suck.mp3");

    if (score == ''){
        displayarea.innerHTML = "Please enter your score"
        empty.play()
    }else if (score >= 70 && score <= 100){
        displayarea.innerHTML = "Grade: A"
        winSound.play()
    }else if (score >= 60 && score <= 69){
        displayarea.innerHTML = "Grade: B"
        winSound.play()
    }else if (score >= 50 && score <= 59){
        displayarea.innerHTML = "Grade: C"
        winSound.play()
    }else if (score >= 45 && score <= 49){
        displayarea.innerHTML = "Grade: D"
        winSound.play()
    }else if (score >= 40 && score <= 44){
        displayarea.innerHTML = "Grade: E"
        failSound.play()
    }else if (score >= 0 && score <= 39){
        displayarea.innerHTML = "Grade: F"
        failSound.play()
    }else{
        displayarea.innerHTML = "Invalid input, please enter a number between 0 and 100."
        empty.play()
    }
}