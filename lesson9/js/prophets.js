fetch(
  'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json'
)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const prophets = jsonObject['prophets'];
    prophetsArray(prophets);
  });

prophetsArray = (prophets) => {
  prophets.map((prophet) => {
    let card = document.createElement('div');
    let h2 = document.createElement('h2');
    let h2b = document.createElement('h2');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let image = document.createElement('img');

    h2.textContent = prophet.name;

    h2b.textContent = prophet.lastname;
    p1.innerHTML =
      '<strong>' + 'Date of Birth: ' + '</strong>' + prophet.birthdate;
    p2.innerHTML =
      '<strong>' + 'Place of Birth: ' + '</strong>' + prophet.birthplace;
    image.setAttribute('src', prophet.imageurl);
    image.setAttribute(
      'alt',
      prophet.name + " " + prophet.lastname + '-' + prophet.order
    );


    card.appendChild(h2);
        card.appendChild(h2b);
    card.appendChild(image);
    card.appendChild(p1);
    card.appendChild(p2);

    document.querySelector('div.cards').appendChild(card);
  });
};
