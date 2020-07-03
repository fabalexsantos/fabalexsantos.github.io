const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const towns = jsonObject['towns'];
    console.table(jsonObject);
    let event = document.createElement('section');
    let h2 = document.createElement('h2');
    h2.textContent = 'Upcoming Events:';
    event.appendChild(h2);
    let p = document.createElement('p');
    p.textContent = towns[4].events[0];
    event.appendChild(p);
    let p2 = document.createElement('p');
    p2.textContent = towns[4].events[1];
    event.appendChild(p2);
    let p3 = document.createElement('p');
    p3.textContent = towns[4].events[2];
    event.appendChild(p3);

    document.querySelector('div.upcoming').appendChild(event);
  });
