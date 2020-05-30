const tempNumber = parseFloat(document.getElementById('temp').textContent);
const speedNumber = parseFloat(document.getElementById('speed').textContent);
let chill = document.getElementById('chill');


let windChill = Math.round(
  35.74 +
    0.6215 * tempNumber -
    35.75 * Math.pow(speedNumber, 0.16) +
    0.42 * tempNumber * Math.pow(speedNumber, 0.16)
);

tempNumber <= 50 && speedNumber > 3
  ? (chill.innerHTML = windChill + '&deg' + 'F')
  : (chill.textContent = 'N/A');
