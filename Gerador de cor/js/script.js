function getRandomHexcolor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

document.addEventListener('DOMContentLoaded', function () {
    const colorbox = document.querySelector('.color-box');
    const colorcode = document.querySelector('#color-code');
    const generateButton = document.querySelector('#generateButton');

    generateButton.addEventListener('click', function() {
        const randomColor = getRandomHexcolor();
        colorbox.style.backgroundColor = randomColor;
        colorcode.textContent = randomColor;
    });
});