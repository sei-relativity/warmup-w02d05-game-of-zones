console.log('starter1.js linked');
let zones = document.querySelectorAll('.zone');

function clickEvent() {
    let count = 0
    this.classList += ' green';
    this.removeEventListener("mouseleave", leaveEvent)
    zones.forEach((zone) => {
        console.log(zone.classList)
        if (zone.classList.value.includes("green")) {
            count++;
        }
    })
    if (count === 4) {
        console.log("congrats")
    }
}

function hoverEvent() {
    this.classList += ' green';
}

function leaveEvent() {
    this.classList = 'zone';
}


zones.forEach((zone) => {
    zone.addEventListener('click', clickEvent)
    zone.addEventListener('mouseover', hoverEvent)
    zone.addEventListener('mouseleave', leaveEvent)
})