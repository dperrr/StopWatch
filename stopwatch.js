let millisecond = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;
let setIntervalId;


document.querySelector('.js-start-button').addEventListener('click', () => {
    startTimer();
});

document.querySelector('.js-stop-button').addEventListener('click', () => {
    stopTimer();
});

document.querySelector('.js-reset-button').addEventListener('click', () => {
    clearInterval(setIntervalId);
    millisecond = 0;
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.querySelector('.js-hour').innerHTML = '00';
    document.querySelector('.js-min').innerHTML = '00';
    document.querySelector('.js-sec').innerHTML = '00';
    document.querySelector('.js-millisecond').innerHTML = '00';
});

function startTimer() {
    if (!setIntervalId) {
        setIntervalId = setInterval(() => {
            millisecond++;
            if (millisecond >= 100) {
                millisecond = 0;
                seconds++;
                if (seconds >= 60) {
                    seconds = 0;
                    minutes++;
                    if (minutes >= 60) {
                        minutes = 0;
                        hours++;
                    }
                }
            }

            document.querySelector('.js-hour').innerHTML = hours.toString().padStart(2, '0');
            document.querySelector('.js-min').innerHTML = minutes.toString().padStart(2, '0');
            document.querySelector('.js-sec').innerHTML = seconds.toString().padStart(2, '0');
            document.querySelector('.js-millisecond').innerHTML = millisecond.toString().padStart(2, '0');
        }, 10); // Update every 10 milliseconds
    }
}

function stopTimer() {
    clearInterval(setIntervalId);
    setIntervalId = null;
}
