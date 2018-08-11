export function initHotkeys() {
    document.addEventListener("keydown", handleHotkey);

    function handleHotkey(e) {
        // alt + 1
        if (e.keyCode === 49 && e.altKey) {
            document.getElementById("start").click();
        }

        // alt + 2
        if (e.keyCode === 50 && e.altKey) {
            document.getElementById("stop").click();
        }

        // alt + 3
        if (e.keyCode === 51 && e.altKey) {
            document.getElementById("reset").click();
        }

        // alt + n
        if (e.keyCode === 78 && e.altKey) {
            document.getElementById("addNote").click();
        }

        // alt + t
        if (e.keyCode === 84 && e.altKey) {
            document.getElementById("taskName").focus();
        }

        // esc on modal
        if (e.keyCode === 27 && document.getElementById("cancel"))
            document.getElementById("cancel").click();

        // ctrl + s for saving note
        if (e.keyCode === 83 && e.ctrlKey && document.getElementById("save")) {
            document.getElementById("save").click();
            e.preventDefault();
        }


    }
}

