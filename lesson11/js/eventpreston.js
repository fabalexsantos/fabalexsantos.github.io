//Start of the Events Cards
const requestURL = 'https://dhinbest.github.io/lesson9/home/home.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);

    const towns = jsonObject['towns'];
    for (let i = 0; i < towns.length; i++) {
      if (towns[i].name == 'Preston') {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');

        let p2 = document.createElement('p');
        let p3 = document.createElement('p');
        let p4 = document.createElement('p');
        let p5 = document.createElement('p');

        h2.textContent = 'Upcoming Events';
        p2.textContent = towns[i].events[0];
        p3.textContent = towns[i].events[1];
        p4.textContent = towns[i].events[2];
        p5.textContent = towns[i].events[3];

        card.appendChild(h2);

        card.appendChild(p2);
        card.appendChild(p3);
        card.appendChild(p4);
        card.appendChild(p5);

        document.querySelector('div.card').appendChild(card);
      }
    }
  });