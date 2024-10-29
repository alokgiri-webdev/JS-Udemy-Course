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
/*
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
*/

// Promisifying the setTimeout
/*
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
*/
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

const getJson = function (url, errMessage = 'Something went wrong') {
  return fetch(url).then(res => {
    if (!res.ok) {
      throw new Error(`${errMessage} ${res.status}`);
    }
    return res.json();
  });
};

const whereAmI = function (lat, lng) {
  getJson(`https://geocode.xyz/${lat},${lng}?geoit=json`).then(data =>
    console.log(data.city)
  );
};
console.log(whereAmI(52.508, 13.381));

// Coding Challenge #2

/* 
Build the image loading functionality that I just showed you on the screen.

Tasks are not super-descriptive this time, so that you can figure out some stuff on your own. Pretend you're working on your own 😉

PART 1
1. Create a function 'createImage' which receives imgPath as an input. This function returns a promise which creates a new image (use document.createElement('img')) and sets the .src attribute to the provided image path. When the image is done loading, append it to the DOM element with the 'images' class, and resolve the promise. The fulfilled value should be the image element itself. In case there is an error loading the image ('error' event), reject the promise.

If this part is too tricky for you, just watch the first part of the solution.

PART 2
2. Comsume the promise using .then and also add an error handler;
3. After the image has loaded, pause execution for 2 seconds using the wait function we created earlier;
4. After the 2 seconds have passed, hide the current image (set display to 'none'), and load a second image (HINT: Use the image element returned by the createImage promise to hide the current image. You will need a global variable for that 😉);
5. After the second image has loaded, pause execution for 2 seconds again;
6. After the 2 seconds have passed, hide the current image.

TEST DATA: Images in the img folder. Test the error handler by passing a wrong image path. Set the network speed to 'Fast 3G' in the dev tools Network tab, otherwise images load too fast.

GOOD LUCK 😀
*/

// Coding Challenge #3

/* 
PART 1
Write an async function 'loadNPause' that recreates Coding Challenge #2, this time using async/await (only the part where the promise is consumed). Compare the two versions, think about the big differences, and see which one you like more.
Don't forget to test the error handler, and to set the network speed to 'Fast 3G' in the dev tools Network tab.

PART 2
1. Create an async function 'loadAll' that receives an array of image paths 'imgArr';
2. Use .map to loop over the array, to load all the images with the 'createImage' function (call the resulting array 'imgs')
3. Check out the 'imgs' array in the console! Is it like you expected?
4. Use a promise combinator function to actually get the images from the array 😉
5. Add the 'paralell' class to all the images (it has some CSS styles).

TEST DATA: ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']. To test, turn off the 'loadNPause' function.

GOOD LUCK 😀
*/
