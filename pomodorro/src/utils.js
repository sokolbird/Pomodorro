function secToMin(sec) {
    let minutes = parseInt(sec / 60, 10);
    let seconds = sec % 60;

    return ('0' + minutes).slice(-2) + ":" + ('0' + seconds).slice(-2);
}

function getPomodoro(timersCount) {
    return Math.ceil(timersCount / 2);
}

export {secToMin, getPomodoro};