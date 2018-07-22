function secToMin(sec) {
    let minutes = parseInt(sec / 60, 10);
    let seconds = sec % 60;

    return ('0' + minutes).slice(-2) + ":" + ('0' + seconds).slice(-2);
}

function getPomodoro(timersCount) {
    return Math.ceil(timersCount / 2);
}

function timerEnded(timerName) {

}

function notifyTimeLeft(timerName) {
    let options = {
        tag : "pomodorro",
        body : "Are you still working?",
        icon: ''
    };
    let notification = new Notification("It's time for a small break!", options);
}

function sendNotification () {
    if ("Notification" in window) {
        if (Notification.permission === "granted") notifyTimeLeft();
        else if (Notification.permission !== "denied") {
            Notification.requestPermission(permission => {
                if (!('permission' in Notification))
                    Notification.permission = permission;
                if (permission === "granted") notifyTimeLeft();
            });
        }
    }
}

export {secToMin, getPomodoro, sendNotification};