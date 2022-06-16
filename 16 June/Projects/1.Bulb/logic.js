function bulbOn(e) {
    console.log(e);
    document.getElementById('img').src = './img/on.png';
}
function bulbOff(e) {
    console.log(e);
    document.getElementById('img').src = './img/off.png';
    // document.getElementById('btn').text
}
const bttN = document.querySelector('#btn');
bttN.addEventListener('click', (e) => {
    console.log(e);
    if (e.target.innerHTML == 'Turn On') {
        bulbOn();
        e.target.innerHTML = "Turn Off";
    }
    else {
        bulbOff();
        e.target.innerHTML = "Turn On";
    }
});