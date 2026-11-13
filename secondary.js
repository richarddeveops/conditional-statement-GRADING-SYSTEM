function secondary(){
    let score = document.getElementById('score').value
    let displayarea = document.getElementById('displayarea')
    if (score == ''){
        displayarea.innerHTML = "Please enter your score"
    }
    if (score >= 70 && score <= 100){
        displayarea.innerHTML = "Grade: A"
    }else if (score >= 60 && score <= 69){
        displayarea.innerHTML = "Grade: B"
    }else if (score >= 50 && score <= 59){
        displayarea.innerHTML = "Grade: C"
    }else if (score >= 45 && score <= 49){
        displayarea.innerHTML = "Grade: D"
    }else if (score >= 40 && score <= 44){
        displayarea.innerHTML = "Grade: E"
    }else if (score >= 0 && score <= 39){
        displayarea.innerHTML = "Grade: F" 
    }else{
        displayarea.innerHTML = "Invalid input, please enter a number between 0 and 100."
    }
}