// Iteration 2: Generate 2 random number and display it on the screen
let num1box = document.getElementById("number1")
let num2box = document.getElementById("number2")
let num1 = Math.floor(Math.random() * 100)
// console.log(num1)
let num2 = Math.floor(Math.random() * 100)
// console.log(num2)
num1box.innerHTML = num1
num2box.innerHTML = num2

// Iteration 3: Make the options button functional
let greater = document.getElementById("greater-than")
let equal = document.getElementById("equal-to")
let less = document.getElementById("lesser-than")
let score = 0

greater.onclick = function () {
    if (num1 > num2) {
        score++
       resetTime(timerId) 
    }
    else {
        location.href = './gameover.html'
     
    }
    num1 = Math.floor(Math.random() * 100)
    console.log(num1)
    num2 = Math.floor(Math.random() * 100)
    console.log(num2)
    num1box.innerHTML = num1
    num2box.innerHTML = num2
}

equal.onclick = function () {
    if (num1 == num2) {
        score++
        resetTime(timerId) 
    }
    else {
        location.href = './gameover.html'
      
    }
    num1 = Math.floor(Math.random() * 100)
    console.log(num1)
    num2 = Math.floor(Math.random() * 100)
    console.log(num2)
    num1box.innerHTML = num1
    num2box.innerHTML = num2
}

less.onclick = function () {
    if (num1 < num2) {
        score++
        resetTime(timerId) 
    }
    else {
        location.href = './gameover.html'
      
    }
    num1 = Math.floor(Math.random() * 100)
    console.log(num1)
    num2 = Math.floor(Math.random() * 100)
    console.log(num2)
    num1box.innerHTML = num1
    num2box.innerHTML = num2
}


// Iteration 4: Build a timer for the game
var timer = document.getElementById("timer")
var time = 5
var timerId;
function showtimer() {
    time = 5
    timer.innerText = time
    timerId = setInterval(() => {
        time--
        if (time == 0) window.location.href = './gameover.html'
        timer.innerText = time

    }, 1000)
    localStorage.setItem("scoreCard",score)
}
function resetTime(timerId) {
    clearInterval(timerId)
    showtimer()
}
showtimer()
