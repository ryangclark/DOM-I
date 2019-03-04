// get digit elements
const digits = document.querySelectorAll('.digit');
const secondTens = document.getElementById('secondTens');
const secondOnes = document.getElementById('secondOnes');
const msTens = document.getElementById('msTens');
const msHundreds = document.getElementById('msHundreds');

// get buttons
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');
// by default, Stop Button and Reset Button are disabled
stopButton.disabled = true;
resetButton.disabled = true;

function counter() {
    // button things
    startButton.disabled = true;
    stopButton.disabled = false;
    // set start time
    let startTime = Date.now();

    // begin calling the counter callback
    let intervalID = window.setInterval(countCB, 10);

    function countCB() {
        let timeElapsed = Date.now() - startTime;
        // update display while under 10 seconds AND while Stop Button hasn't been hit
        if (timeElapsed <= 10000 && !stopButton.disabled) {
            let intervalBreakDown = timeElapsed.toString().padStart(5, '0').split('');
            secondTens.textContent  = intervalBreakDown[0];
            secondOnes.textContent  = intervalBreakDown[1];
            msTens.textContent      = intervalBreakDown[2];
            msHundreds.textContent  = intervalBreakDown[3];
        } else if (stopButton.disabled) {
            clearInterval(intervalID);
            // enable reset button
            resetButton.disabled = false;
            // digit color to red
            digits.forEach(digit => digit.classList.add('redDigit'));
        } else {
            clearInterval(intervalID);
            console.log('clearInterval()');
            // enable reset button
            resetButton.disabled = false;
            // digit color to red
            digits.forEach(digit => digit.classList.add('redDigit'));
            // hardcode the final number
            secondTens.textContent = '1';
            secondOnes.textContent = '0';
            msTens.textContent = '0';
            msHundreds.textContent = '0';
        }
    }
}

function stopCounter() {
    stopButton.disabled = true;
}

function resetCounter() {
    // digit color to black
    digits.forEach(digit => digit.classList.remove('redDigit'));
    // disable Reset Button
    resetButton.disabled = true;
    // enable Start Button
    startButton.disabled = false;
    // zero it out
    secondTens.textContent = '0';
    secondOnes.textContent = '0';
    msTens.textContent = '0';
    msHundreds.textContent = '0';
}

// To show what Date.now() returns
var d = Date.now();
console.log('Date now:', d);