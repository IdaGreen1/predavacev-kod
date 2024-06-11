function generateRandomTemp() {
    return Math.random() * 80 - 35;
}
function changeBackgroundColor(temperature) {
    switch (true) {
        case temperature > 40:
            document.body.style.backgroundColor = '#FF4D00';
            break;
        case temperature > 10:
            document.body.style.backgroundColor = '#FFBD00';
            break;
        case temperature > -10:
            document.body.style.backgroundColor = '#01DFFF';
            break;
        default:
            document.body.style.backgroundColor = '#0045FF';
            break;
    } 
}

function setRandomTemperatureAndBackgroundColor() {
    var temperature = generateRandomTemp();
    document.querySelector('.temperature').textContent = temperature.toFixed(2);
    changeBackgroundColor(temperature);
}

setRandomTemperatureAndBackgroundColor();

document.getElementById('generate-btn').addEventListener('click', setRandomTemperatureAndBackgroundColor);