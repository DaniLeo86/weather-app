function showTemperature(response) {
  document.querySelector("#search-city").innerHTML = response.data.name;
  document.querySelector("#main-temp").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector(
    "#humidity"
  ).innerHTML = `${response.data.main.humidity}%`;
  document.querySelector("#wind").innerHTML = `${Math.round(
    response.data.wind.speed
  )} mph`;

  document.querySelector("#weather-description").innerHTML =
    response.data.weather[0].main;
  //document.querySelector("#saturday").innerHTML = response.data.forcast
}

function searchCity(city) {
  let apiKey = "fb4375d5f9906b4ca98ce14fe476434a";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
  axios.get(url).then(showTemperature);
}
function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#city-typed").value;
  searchCity(city);
}
let submit = document.querySelector("#search-form");
submit.addEventListener("submit", handleSubmit);

function searchLocation(position) {
  let apiKey = "fb4375d5f9906b4ca98ce14fe476434a";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=imperial`;

  axios.get(apiUrl).then(showTemperature);
}

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}
//
let currentLocationButton = document.querySelector("#current-location-button");
currentLocationButton.addEventListener("click", getCurrentLocation);
//
function changetoFahrenheit() {
  dayTemp.innerText = `${Math.round(dayTemp.innerText * 1.8 + 32)}`;
}
function changeToCelsius() {
  dayTemp.innerText = `${Math.round((dayTemp.innerText - 32) / 1.8)}`;
}
let dayTemp = document.querySelector("#main-temp");
console.log(dayTemp);

let celcius = document.querySelector("#celsius");
celcius.addEventListener("click", changeToCelsius);

let fahrenheit = document.querySelector("#fahrenheit");
fahrenheit.addEventListener("click", changetoFahrenheit);
//
//adding 7 days a week
//let sevenDayUrl= `https://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&cnt=7&appid=${apiKey}&units=imperial`;

//
let now = new Date();

function formatDate(date) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let currentYear = date.getFullYear();
  let currentDay = days[date.getDay()];
  let currentMonth = months[date.getMonth()];
  let currentDate = date.getDate();
  let currentHour = date.getHours();
  let currentMinutes = date.getMinutes();

  let formattedDate = document.querySelector("#current-date");

  formattedDate.innerHTML = `${currentDay}, ${currentMonth} ${currentDate}, ${currentYear}, ${currentHour}:${currentMinutes}`;
  let button = document.querySelector("#form-button");
}

formatDate(now);

//
