function setReminder(minutes = 1) {
    if (!('Notification' in window)) {
        alert('A böngésző nem támogatja az értesítéseket.');
        return;
    }

    if (Notification.permission === 'granted') {
        const delay = minutes * 60 * 1000; // Convert minutes to milliseconds
        setTimeout(() => {
            new Notification('Ideje szünetet tartani!');
        }, delay);
    } else if (Notification.permission !== 'denied') {
        Notification.requestPermission().then(permission => {
            if (permission === 'granted') {
                setReminder(minutes);
            } else {
                alert('Az értesítések engedélyezése szükséges az emlékeztetőhöz.');
            }
        });
    } else {
        alert('Az értesítések le vannak tiltva a böngészőben.');
    }
}

document.getElementById('setReminderButton').addEventListener('click', () => {
    const minutes = parseInt(prompt('Hány perc múlva szeretne emlékeztetőt kapni?', '1'), 10);
    if (!isNaN(minutes) && minutes > 0) {
        setReminder(minutes);
    } else {
        alert('Kérjük, adjon meg egy érvényes számot!');
    }
});