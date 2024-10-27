'use strict';
const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
//https://restcountries.com/v3.1/name/india
//https://restcountries.com/v3.1/alpha/${neighbour}

//Render Country
const renderCountry = function (data) {
  const html = `<article class="country">
          <img class="country__img" src="${data.flags.png}" />
          <div class="country__data">
            <h3 class="country__name">${data.altSpellings[1]}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              +data.population / 1_000_000
            ).toFixed(2)}</p>
            <p class="country__row"><span>🗣️</span>${
              Object.values(data.languages)[0]
            }</p>
            <p class="country__row"><span>💰</span>${
              data.currencies[Object.keys(data.currencies)[0]].name
            }</p>
          </div>
        </article>`;
  countriesContainer.insertAdjacentHTML('beforeend', html);
};

/*
const getCountryData = function (country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      console.log(data[0]);
      renderCountry(data[0]);
      const neighbour = data[0].borders[0];
      return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
    })
    .then(res => res.json())
    .then(data => renderCountry(data[0]))
    .catch(err => console.error(`${err}`))
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};
getCountryData('india');
*/
/*
const getJson = function (url, errorMessage = 'Something went wrong') {
  return fetch(url).then(res => {
    if (!res.ok) {
      throw new Error(`${errmessage} ${res.status}`);
    }
    return res.json();
  });
};

const getCountryData = function (country) {
  getJson(`https://restcountries.com/v3.1/name/${country}`)
    .then(data => {
      console.log(data[0]);
      renderCountry(data[0]);
      const neighbour = data[0].borders[0];
      return getJson(`https://restcountries.com/v3.1/alpha/${neighbour}`);
    })
    .then(data => {
      console.log(data);
      renderCountry(data[0]);
    })
    .catch(err => console.error(`${err}`))
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};
getCountryData('india');
*/

/*
const getCountryData = async function (
  country,
  errMessage = 'Something went wrong'
) {
  try {
    const response = await fetch(
      `https://restcountries.com/v3.1/name/${country}`
    );
    if (!response.ok) {
      throw new Error(`${errMessage} ${response.status}`);
    }
    const [data] = await response.json();
    renderCountry(data);
    const neighbour = data.borders[0];
    const res = await fetch(
      `https://restcountries.com/v3.1/alpha/${neighbour}`
    );
    if (!res.ok) {
      throw new Error(`${errMessage} ${response.status}`);
    }
    const [data2] = await res.json();
    renderCountry(data2);
  } catch (err) {
    console.error(`${err.message}`);

    throw err;
  }
};
getCountryData('india');
*/

// Creating a Promise (Also see how to convert in a async await by promisifying)
const lotteryPromise = new Promise((resolve, reject) => {
  console.log(`Your lottery draw is happening`);
  setTimeout(() => {
    if (Math.random() >= 0.5) {
      resolve('You won!');
    } else {
      reject(new Error('You loose'));
    }
  }, 2000);
});

lotteryPromise
  .then(res => console.log(res))
  .catch(err => console.error(`${err.message}`));

// Promisifying the setTimeout
const wait = function (seconds) {
  return new Promise(resolve => {
    setTimeout(resolve, seconds * 1000);
  });
};

async function waitData() {
  try {
    await wait(2);
    console.log('I waited for 2 seconds');
  } catch (err) {
    console.error(err);
  }
}

waitData();

// Coding Challenge 1
/* 
In this challenge you will build a function 'whereAmI' which renders a country ONLY based on GPS coordinates. For that, you will use a second API to geocode coordinates.

Here are your tasks:

PART 1
1. Create a function 'whereAmI' which takes as inputs a latitude value (lat) and a longitude value (lng) (these are GPS coordinates, examples are below).
2. Do 'reverse geocoding' of the provided coordinates. Reverse geocoding means to convert coordinates to a meaningful location, like a city and country name. Use this API to do reverse geocoding: https://geocode.xyz/api.
The AJAX call will be done to a URL with this format: https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and promises to get the data. Do NOT use the getJSON function we created, that is cheating 😉
3. Once you have the data, take a look at it in the console to see all the attributes that you recieved about the provided location. Then, using this data, log a messsage like this to the console: 'You are in Berlin, Germany'
4. Chain a .catch method to the end of the promise chain and log errors to the console
5. This API allows you to make only 3 requests per second. If you reload fast, you will get this error with code 403. This is an error with the request. Remember, fetch() does NOT reject the promise in this case. So create an error to reject the promise yourself, with a meaningful error message.

PART 2
6. Now it's time to use the received data to render a country. So take the relevant attribute from the geocoding API result, and plug it into the countries API that we have been using.
7. Render the country and catch any errors, just like we have done in the last lecture (you can even copy this code, no need to type the same code)

TEST COORDINATES 1: 52.508, 13.381 (Latitude, Longitude)
TEST COORDINATES 2: 19.037, 72.873
TEST COORDINATES 2: -33.933, 18.474

GOOD LUCK 😀
*/
//Solving .then way
