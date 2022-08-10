export function turnOff() {
    document.getElementById('finished2').classList.add("finished");
    document.getElementById("sort-button").disabled = true;
    document.getElementById("refresh-button").disabled = true;
    document.getElementById("in-nav-container").classList.toggle("turn-off");
    document.getElementById("menu-appbar").classList.toggle("turn-off");
    document.getElementById("about-me-div").classList.toggle("turn-off");
    document.getElementById("footer-link-container").classList.toggle("turn-off");
}

export function turnOn() {
    document.getElementById("sort-button").disabled = false;
    document.getElementById("refresh-button").disabled = false;
    document.getElementById("in-nav-container").classList.toggle("turn-off");
    document.getElementById("menu-appbar").classList.toggle("turn-off");
    document.getElementById("footer-link-container").classList.toggle("turn-off");
    document.getElementById("about-me-div").classList.toggle("turn-off");
    document.getElementById('finished2').classList.remove("finished");
}

export function quickTurnOff() {
    document.getElementById("sort-button").disabled = true;
    document.getElementById("refresh-button").disabled = true;
    document.getElementById("in-nav-container").classList.toggle("turn-off");
    document.getElementById("menu-appbar").classList.toggle("turn-off");
    document.getElementById("about-me-div").classList.toggle("turn-off");
    document.getElementById("footer-link-container").classList.toggle("turn-off");
}

export function quickTurnOn() {
    document.getElementById("sort-button").disabled = false;
    document.getElementById("refresh-button").disabled = false;
    document.getElementById("in-nav-container").classList.toggle("turn-off");
    document.getElementById("menu-appbar").classList.toggle("turn-off");
    document.getElementById("footer-link-container").classList.toggle("turn-off");
    document.getElementById("about-me-div").classList.toggle("turn-off");
}

export function timeOut(speed) {
    return new Promise(resolve => setTimeout(resolve, speed));
}