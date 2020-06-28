//ADD the key and change units to imperial
const apiURL =
  'http://api.openweathermap.org/data/2.5/weather?id=5604473&appid=79c66cddcbc0ca13f6645125edf877d6&units=imperial';

//Go fetch it and then wait for a response.
fetch(apiURL)
  .then((response) => response.json())
  .then((weatherInfo) => {
    //Once it comes back, display it to the console.
    console.log(weatherInfo);

    document.getElementById('temp').innerHTML = weatherInfo.main.temp;
    document.getElementById('speed').innerHTML = weatherInfo.wind.speed;
    document.getElementById('condition').innerHTML =
      weatherInfo.weather[0].description;
    document.getElementById('humidity').innerHTML = weatherInfo.main.humidity;
  }); //end of "then" fat arrow function
