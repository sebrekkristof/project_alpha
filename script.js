let timer = null;
let timeLeft = 1500;

function updateTimerDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    document.getElementById('timerDisplay').textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function startTimer() {
    if (!timer) {
        timer = setInterval(() => {
            if (timeLeft > 0) {
                timeLeft--;
                updateTimerDisplay();
            } else {
                clearInterval(timer);
                timer = null; // Reset the timer reference
                alert('Pomodoro véget ért!');
            }
        }, 1000);
    }
}

function pauseTimer() {
    clearInterval(timer);
    timer = null; // Reset the timer reference
}

function resetTimer() {
    timeLeft = 1500;
    updateTimerDisplay();
    clearInterval(timer);
    timer = null; // Reset the timer reference
}

function showSection(id) {
    document.querySelectorAll('main section').forEach(s => {
        s.style.display = 'none';
        s.setAttribute('aria-hidden', 'true');
    });
    const section = document.getElementById(id);
    section.style.display = 'block';
    section.setAttribute('aria-hidden', 'false');
}

document.addEventListener('DOMContentLoaded', () => {
    updateTimerDisplay();
});
let timerInterval;
// timeLeft is already declared earlier, so we don't redeclare it here
timeLeft = 25 * 60; // 25 minutes in seconds

function startTimer() {
    if (timerInterval) return; // Prevent multiple intervals
    timerInterval = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            timerInterval = null;
            alert("Időzítő lejárt!");
        } else {
            timeLeft--;
            updateTimerDisplay();
        }
    }, 1000);
}

function pauseTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
}

function resetTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
    timeLeft = 25 * 60; // Reset to 25 minutes
    updateTimerDisplay();
}

function updateTimerDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    document.getElementById("timerDisplay").textContent = 
        `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

// Initialize display
updateTimerDisplay();