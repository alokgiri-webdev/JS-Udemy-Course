'use strict';
const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

// RENDER COUNTRY
const renderCountry = function (data, className = '') {
  const html = `<article class="country ${className}">
    <img class="country__img" src="${data.flags.png}" />
    <div class="country__data">
      <h3 class="country__name">${data.altSpellings[1]}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)}</p>
      <p class="country__row"><span>🗣️</span>${
        Object.values(data.languages)[0] // Note this
      }</p>
      <p class="country__row"><span>💰</span>${
        data.currencies[Object.keys(data.currencies)[0]].name //Note This
      }</p>
    </div>
  </article>`;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  //countriesContainer.style.opacity = 1;
};

//RENDER ERROR
const renderError = function (message) {
  countriesContainer.insertAdjacentText('beforeend', html);
  //countriesContainer.style.opacity = 1;
};

//GET JSON DATA
const getJson = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(`${errorMsg} (${response.status})`);
    }
    return response.json();
  });
};
// const request = fetch('https://restcountries.com/v3.1/name/india');
// console.log(request);

/* Detailed code
const getCountryData = function (country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(response => {
      console.log(response); // It is a resolved value
      return response.json(); // Every resolved value has json() method attached to it. And it will also result in a promise.
    })
    .then(data => {
      console.log(data[0]);
      renderCountry(data[0]);
    });
};
getCountryData('pakistan');
*/

// Shortening it for better readability
/*
const getCountryData = function (country) {
  //Country Main
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(response => response.json())
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders?.[0];

      //Country Neighbour
      return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`); // Returning a promise to be consumed again
    })
    .then(response => response.json())
    .then(data => renderCountry(data[0], 'neighbour'));
};

getCountryData('india');
*/

//Handling error
/*
const getCountryData = function (country) {
  //Country Main
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(response => response.json())
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders?.[0];

      //Country Neighbour
      return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`); // Returning a promise to be consumed again
    })
    .then(response => response.json())
    .then(data => renderCountry(data[0], 'neighbour'))
    .catch(err => {
      console.error(`${err} 😒 `);
      renderError(`Something went wrong! ${err.message} Please Try Again!`); // err is the object which has the message property in it.
    }) // At last, as this will catch all the errors in any of the resolved value.
    .finally(() => {
      // No matter if promise is fulfilled or rejected, this will happen irrespective.
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener('click', function () {
  getCountryData('india');
});
*/
//getCountryData('ghjkk');

// Handling error manually
/*
const getCountryData = function (country) {
  //Country Main
  getJson(`https://restcountries.com/v3.1/name/${country}`, 'Country not found')
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders?.[0];
      if (!neighbour) {
        throw new Error(`No neighbour found`);
      }
      //Country Neighbour
      return getJson(
        `https://restcountries.com/v3.1/alpha/${neighbour}`,
        'Country not found'
      );
    })
    .then(data => renderCountry(data, 'neighbour'))
    .catch(err => {
      console.error(`${err} 😒 `);
      renderError(`Something went wrong! ${err.message} Please Try Again!`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener('click', function () {
  getCountryData('india');
});
*/
//getCountryData('ghjkk');

// Creating a Promise
/*
const LotteryPromise = new Promise(function (resolve, reject) {
  //This executor function is the async task which will run in the background.
  console.log('Your Lottery Draw is happening');
  setTimeout(() => {
    if (Math.random() >= 0.5) {
      resolve('You win 😍');
    } else {
      reject(new Error('You loose 😢'));
    }
  }, 2000);
});

LotteryPromise.then(res => console.log(res)).catch(err => console.error(err));
*/

//Promisifying the SetTimeout
/*
const wait = function (seconds) {
  return new Promise(resolve => {
    setTimeout(resolve, seconds * 1000);
  });
};
wait(2)
  .then(() => {
    console.log('I waited for 2 seconds');
    return wait(2); // Again this creates a new Promise to be consumed.
  })
  .then(() => console.log('I waited for 2 more seconds'));
*/
// Static Promise
/*
Promise.resolve('abc').then(res => console.log('abc'));
Promise.reject(new Error('Problem!')).catch(err => console.error(err));
*/

/*
// Async Await
const whereAmI = async function (country) {
  try {
    const response = await fetch(
      `https://restcountries.com/v3.1/name/${country}`
    );
    if (!response.ok) {
      throw new error(`${response.status}`);
    }
    const [data] = await response.json();
    console.log(data);
    renderCountry(data);
  } catch (err) {
    // catching the error from the operations
    console.error(err.message);
    renderError(`Something went wrong' ${err.message}`);

    //for Catching the rejected Promise from an 'async function'
    throw err;
  }
};
/*
whereAmI('bhutan')
  .then(city => console.log(`${country}`))
  .catch(err => console.error(`${err.message}`)); // Catching the error from rejected Promise of async function
*/

/*IFFI
//As we can currently use await in general and on the function only inside an async function so created an IFFI
(async function () {
  try {
    const country = await whereAmI('india');
    console.log(country);
  } catch (err) {
    console.error(`${err.message}`);
  }
  console.log(`Finished getting the country`);
})();
*/

// Running Promises in parallel
/*
const get3Countries = async function (c1, c2, c3) {
  try {
    const [data1] = await getJson(`https://restcountries.com/v3.1/name/${c1}`);
    const [data2] = await getJson(`https://restcountries.com/v3.1/name/${c2}`);
    const [data3] = await getJson(`https://restcountries.com/v3.1/name/${c3}`);
    console.log([...data1.capital, ...data2.capital, ...data3.capital]);
  } catch (err) {
    console.error(err);
  }
};
get3Countries('india', 'pakistan', 'bhutan');
*/
/*
const get3Countries = async function (c1, c2, c3) {
  try {
    // Use Promise.all to make requests concurrently
    const [data1, data2, data3] = await Promise.all([       // Promise.all takes data in array and results in array
      getJson(`https://restcountries.com/v3.1/name/${c1}`),
      getJson(`https://restcountries.com/v3.1/name/${c2}`),
      getJson(`https://restcountries.com/v3.1/name/${c3}`),
    ]);

    // Accessing the first element from each array response and logging the capitals
    console.log([data1[0].capital, data2[0].capital, data3[0].capital]);
  } catch (err) {
    console.log(`Error: ${err.message}`);
  }
};

// Call the function
get3Countries('india', 'pakistan', 'bhutan');
*/
