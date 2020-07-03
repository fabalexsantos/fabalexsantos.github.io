function toggleMenu() {
  document.getElementById('primaryNav').classList.toggle('hide');
}

// The footer must display the current date using JavaScript
// in this format Wednesday, 24 July 2020

const daynames = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const d = new Date();
const dayName = daynames[d.getDay()];
const monthName = months[d.getMonth()];
const year = d.getFullYear();
const fulldate = dayName + ', ' + d.getDate() + ' ' + monthName + ' ' + year;
document.getElementById('currentDate').textContent = fulldate;

const day = new Date();
const today = day.getDay();

const weekDay = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const apiURL2 =
  '//api.openweathermap.org/data/2.5/forecast?id=5585000&appid=79c66cddcbc0ca13f6645125edf877d6&units=imperial';

fetch(apiURL2)
  .then((response) => response.json())
  .then((weatherInfo) => {
    let myList = weatherInfo.list;

    let forecastDayNumber = today;

    let html = '';
    for (i = 0; i < myList.length; i++) {
      let time = myList[i].dt_txt;

      if (time.includes('18:00:00')) {
        forecastDayNumber++;

        if (forecastDayNumber === 7) forecastDayNumber = 0;

        let dayHTML = `
        <div class="day">
          <h3>${weekDay[forecastDayNumber]}</h3>
          <img src="http://api.openweathermap.org/img/w/${weatherInfo.list[i].weather[0].icon}.png" alt="${weatherInfo.list[i].weather[0].description}" />
          <p>${weatherInfo.list[i].main.temp}&degF</p>
        </div>`;
        html += dayHTML;
      }
    }
    document.getElementById('dayforecast').innerHTML = html;
  });

//ADD the key and change units to imperial
const apiURL =
  '//api.openweathermap.org/data/2.5/weather?id=5585000&appid=79c66cddcbc0ca13f6645125edf877d6&units=imperial';

//Go fetch it and then wait for a response.
fetch(apiURL)
  .then((response) => response.json())
  .then((weatherInfo) => {
    //Once it comes back, display it to the console.

    document.getElementById('temp').innerHTML = weatherInfo.main.temp;
    document.getElementById('speed').innerHTML = weatherInfo.wind.speed;
    document.getElementById('condition').innerHTML =
      weatherInfo.weather[0].description;
    document.getElementById('humidity').innerHTML = weatherInfo.main.humidity;
  }); //end of "then" fat arrow function


  
  //Event
const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    // console.table(jsonObject);  // temporary checking for valid response and data parsing

    const towns = jsonObject['towns'];

    const townFilter = towns.filter((town) => town.name == 'Fish Haven');

    townFilter.forEach((town) => {
      let townSection = document.createElement('section');
      let events = document.createElement('div');
      let h2 = document.createElement('h2');
      let line1 = document.createElement('p');
      let line2 = document.createElement('p');
      let line3 = document.createElement('p');
      let line4 = document.createElement('p');

      h2.textContent = `Events for ${town.name}`;
      line1.textContent = town.events[0];
      line2.textContent = town.events[1];
      line3.textContent = town.events[2];
      line4.textContent = town.events[3];

      townSection.appendChild(events);
      events.appendChild(h2);
      events.appendChild(line1);
      events.appendChild(line2);
      events.appendChild(line3);
      events.appendChild(line4);

      document.getElementById('event').appendChild(townSection);
    });
  });
