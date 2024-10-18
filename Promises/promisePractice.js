'use strict';
const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

//RENDER COUNTRY
const renderCountry = function (data, className = '') {
  const html = `<article class="country ${className}">
    <img class="country__img" src="${data.flags.png}" />
    <div class="country__data">
      <h3 class="country__name">${data.altSpellings.at(1)}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row">
        <span>👫</span>${+(data.population / 1000000).toFixed(1)}
      </p>
      <p class="country__row">
        <span>🗣️</span>${Object.values(data.languages)[0]}
      </p>
      <p class="country__row">
        <span>💰</span>${data.currencies[Object.keys(data.currencies)[0]].name}
      </p>
    </div>
  </article>`;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

//RENDER ERROR
const renderError = function (message) {
  countriesContainer.insertAdjacentText('beforeend', html);
  countriesContainer.style.opacity = 1;
};

//GetJson function (converted to Async await)
const getJson = function (url) {
  return fetch(url).then(res => {
    if (!res.ok) {
      throw new Error(`Something went wrong ${res.status}`);
    }
    return res.json();
  });
};

//console.log(getJson('https://api.spacexdata.com/v4'));
console.log(getJson('https://api.spacexdata.com/v4/capsules'));
console.log(getJson('https://api.spacexdata.com/v4/cores'));
console.log(getJson('https://api.spacexdata.com/v4/launches/past'));

// SpaceX Past Launches API URL
const launchesUrl = 'https://api.spacexdata.com/v4/launches/past';

// Fetch data from the SpaceX Past Launches API

fetch(launchesUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Failed to retrieve SpaceX launches data');
    }
    return response.json();
  })
  .then(data => {
    // Filter for Falcon 9 launches, excluding Falcon 1
    const falcon9Launches = data.filter(
      launchData =>
        launchData.links?.article?.includes('falcon-9') &&
        !launchData.links?.article?.includes('falcon-1')
    );

    // Count of Falcon 9 launches
    const falcon9LaunchCount = falcon9Launches.length;
    console.log(
      `Number of Falcon 9 launches (excluding Falcon 1): ${falcon9LaunchCount}`
    );
  })
  .catch(error => {
    console.error('Error:', error);
  });

// SpaceX Past Launches API URL

// Fetch data from the SpaceX Past Launches API
/*
fetch(launchesUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Failed to retrieve SpaceX launches data');
    }
    return response.json();
  })
  .then(data => {
    // Count missing landingPad values
    const missingLandingPads = data.filter(
      launch => launch[0].cores[0].landingPad === null
    );
    const missingLandingPadsCount = missingLandingPads.length;

    console.log(
      `Number of missing values in landingPad: ${missingLandingPadsCount}`
    );
  })
  .catch(error => {
    console.error('Error:', error);
  });
*/

fetch(launchesUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Failed to retrieve SpaceX launches data');
    }
    return response.json();
  })
  .then(data => {
    // Count missing landingPad values
    const missingLandingPads = data.filter(
      launch => !launch.cores[0]?.landpad // Use optional chaining (?.) for safety
    );

    const missingLandingPadsCount = missingLandingPads.length;

    console.log(
      `Number of missing values in landingPad: ${missingLandingPadsCount}`
    );
  })
  .catch(error => {
    console.error('Error:', error);
  });

//Get Country
/*
const getCountry = function (country) {
  getJson(`https://restcountries.com/v3.1/name/${country}`)
    .then(data => {
      console.log(data[0]);
      renderCountry(data[0]);

      const neighbour = data[0].borders?.[0];

      return getJson(`https://restcountries.com/v3.1/alpha/${neighbour}`);
    })
    .then(data => {
      console.log(data[0]);
      renderCountry(data[0], 'neighbour');
    })
    .catch(err => {
      console.error(`${err}`);
      renderError(`Something went wrong ${err.message} Please Try Again!`);
    });
};
btn.addEventListener('click', () => getCountry('India'));
*/
//Creating a Promise

//Promisifying a setTimeout function

//Async Await
const getCountry = async function (country) {
  try {
    const [data] = await getJson(
      `https://restcountries.com/v3.1/name/${country}`
    );

    console.log(data);
    renderCountry(data);

    const neighbour = data.borders?.[0];

    if (!neighbour) {
      throw new Error(`No neighbour country`);
    }
    const [neighbourCountry] = await getJson(
      `https://restcountries.com/v3.1/alpha/${neighbour}`
    );

    console.log(neighbourCountry);
    renderCountry(neighbourCountry, 'neighbour');
  } catch (err) {
    console.error(err.message);
    renderError(`Something went wrong ${err.message} Please Try Again!`);

    throw err;
  }
};
btn.addEventListener('click', () => getCountry('India'));

//Creating new Promise
const lotteryPromise = new Promise((resolve, reject) => {
  console.log('Your LotteryTicket');
  setTimeout(() => {
    if (Math.random() <= 0.5) {
      resolve('You win!');
    } else {
      reject(new Error('You lose'));
    }
  }, 1000);
})
  .then(res => console.log(res))
  .catch(err => console.error(err));

//Promisifying the setTimeOut
const wait = function (seconds) {
  return new Promise(resolve => {
    setTimeout(resolve, seconds * 1000);
  });
};
wait(2)
  .then(res => {
    console.log('I waited for 2 seconds');
    return wait(1);
  })
  .then(res => console.log(`I waited for 1 more second`));
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
