// get digit elements
const digits = document.querySelectorAll('digit');
// function to toggle .redDigit class

const secondTens = document.getElementById('secondTens');
const secondOnes = document.getElementById('secondOnes');
const msTens = document.getElementById('msTens');
const msHundreds = document.getElementById('msHundreds');

// const test = 10000;
// console.log(test.toString().split('').slice(0,4));

// get buttons
const startButton = document.getElementById('start');
const resetButton = document.getElementById('reset');
// by default, Reset Button is disabled
// resetButton.disabled = true;

// Start button event
// startButton.onclick = counter();

function counter() {
    // digit color to black
    digits.forEach(digit => digit.classList.remove('redDigit'));
    // disable start button
    startButton.disabled = true;

    // begin calling the counter callback
    let intervalID = window.setInterval(countCB, 100);
    let startTime = Date.now().toString().split(7,12);

    function countCB() {
        // new timer
        time = Date.now().toString().split(7,12);
        console.log(time - startTime);
        // while count is less than 10 seconds
        if ((time - startTime) <= 10000) {
            let intervalBreakDown = startTime.split('').slice(0,4);
            console.log(time - startTime);
            secondTens.textContent = intervalBreakDown[0];
            secondOnes.textContent = intervalBreakDown[1];
            msTens.textContent = intervalBreakDown[2];
            msHundreds.textContent = intervalBreakDown[3];
        } else {
            clearInterval(intervalID);
            console.log('clearInterval');
            // enable reset button
            resetButton.disabled = false;
            // digit color to red
            digits.forEach(digit => digit.classList.add('redDigit'));
        }
    }
}

// const testInterval = window.setInterval(testCB, 1000);

var d = Date.now();
// var t = d.toLocaleTimeString();
console.log(d);
console.log(d.toString().slice(8,12));

function testCB() {
    console.log('Test Interval:', testInterval);
}