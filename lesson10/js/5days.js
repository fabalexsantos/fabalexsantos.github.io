const day = new Date();
const today = day.getDay();
console.log(today);

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
  '//api.openweathermap.org/data/2.5/forecast?id=5604473&appid=79c66cddcbc0ca13f6645125edf877d6&units=imperial';

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
