function secToMin(sec) {
    let minutes = parseInt(sec / 60, 10);
    let seconds = sec % 60;

    return ('0' + minutes).slice(-2) + ":" + ('0' + seconds).slice(-2);
}

function getPomodoro(timersCount) {
    return Math.ceil(timersCount / 2);
}

function notifyTimeLeft(isBreak) {
    let header, body;
    if (isBreak) {
        header = "It's time for a work!";
        body = "Had a good break?"
    }
    else {
        header = "It's time for a break!";
        body = "Are you still working?"
    }

    let options = {
        tag : "pomodorro",
        body : body,
        icon: 'https://raw.githubusercontent.com/sokolbird/Pomodorro/master/src/tomato.png',
        vibrate: [200, 100, 200, 100, 200],
        badge: 'https://raw.githubusercontent.com/sokolbird/Pomodorro/master/src/badge.png',
    };

    let Opera = (!!navigator.userAgent.match(/Opera|OPR\//));
    if (!Opera) document.getElementById("sound").play();

    new Notification(header, options);
}

function sendNotification(isBreak) {
    if ("Notification" in window) {
        if (Notification.permission === "granted") notifyTimeLeft(isBreak);
        else if (Notification.permission !== "denied") {
            Notification.requestPermission(permission => {
                if (!('permission' in Notification))
                    Notification.permission = permission;
                if (permission === "granted") notifyTimeLeft(isBreak);
            });
        }
    }
}

export {secToMin, getPomodoro, sendNotification};