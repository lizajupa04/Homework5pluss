function searchCity(city) {
  let apiKey = "cf6b50b908fa2e0baca3eed8a569a5f6";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric`;
  axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemperature);
}

searchCity("Puerto Rico");

function showTemperature(response) {
  console.log(response);
  let cityElement = document.querySelector("#cit");
  cityElement.innerHTML = response.data.name;

  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = `Humidity: ${response.data.main.humidity}%`;

  let windsElement = document.querySelector("#wind");
  windsElement.innerHTML = `Wind: ${response.data.wind.speed} km/h`;

  let tiempoElement = document.querySelector("#tiempoclima");
  tiempoElement.innerHTML = response.data.weather[0].description;

  temperatur = Math.round(response.data.main.temp);
  let temperatureElement = document.querySelector("#numerogrande");
  temperatureElement.innerHTML = `${temperatur}`;

  let iconElement = document.querySelector("#imagenbig");
  iconElement.setAttribute(
    "src",
    `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );

  getForecast(response.data.coord);
}

function search(event) {
  event.preventDefault();
  let city = document.querySelector("#inputsearch").value;
  searchCity(city);
}

let form = document.querySelector("#form1");
form.addEventListener("submit", search);

//___________________________________________

function bogotaButton(event) {
  event.preventDefault();
  searchCity("Bogotá");
}

let enter2 = document.querySelector("#buttonbogota");
enter2.addEventListener("click", bogotaButton);

function parisButton(event) {
  event.preventDefault();
  searchCity("Paris");
}

let enter3 = document.querySelector("#buttonparis");
enter3.addEventListener("click", parisButton);

function newyorkButton(event) {
  event.preventDefault();
  searchCity("New York");
}

let enter4 = document.querySelector("#buttonnewyork");
enter4.addEventListener("click", newyorkButton);

//_____________________________________________________
function showPosition(position) {
  let apiKey = "cf6b50b908fa2e0baca3eed8a569a5f6";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(showTemperature);
}

function getPosition(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(showPosition);
}
let newButton = document.querySelector("#buttoncurrent");
newButton.addEventListener("click", getPosition);

//_________________________________________________________
let now = new Date();
console.log(now.getdate);

let date = now.getDate();
console.log(now.getDate);

let hour = now.getHours();
console.log(now.getHours);

let minute = now.getMinutes();
console.log(now.getMinutes);

let seconds = now.getSeconds();
console.log(now.getSeconds);

let day_night = "AM";

if (hour > 12) {
  day_night = "PM";
  hour = hour - 12;
}
if (hour < 10) {
  hour = "0" + hour;
}
if (minute < 10) {
  minute = "0" + minute;
}
if (seconds < 10) {
  seconds = "0" + seconds;
}

let days = [
  "Sunday",
  "Monday",
  "Tusday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let day = days[now.getDay()];
console.log(day);

let completo1 = `${day} ${hour}:${minute} ${day_night}`;

function fecha(date) {
  let currentDay = days[date.getDay()];
  let currentDate = date.getDate();
  let currentHour = date.getHours();
  let currentMinute = date.getMinutes();

  let completo = `${currentDay} ${currentHour}:${currentMinute}`;

  return completo;
}

dia.innerHTML = `${completo1}`;

//_______________________________________________________

let temperatur = null;

function showFahrenheit(event) {
  event.preventDefault();
  let elementotemperatura = document.querySelector("#numerogrande");

  elementCelsius.classList.remove("celcious");
  elementFahrenheit.classList.add("celcious");
  let fahrenheitTemperature = (temperatur * 9) / 5 + 32;

  elementotemperatura.innerHTML = Math.round(fahrenheitTemperature);
}

let elementFahrenheit = document.querySelector("#farengei");
elementFahrenheit.addEventListener("click", showFahrenheit);

function showCelsius(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#numerogrande");
  elementCelsius.classList.add("celcious");
  elementFahrenheit.classList.remove("celcious");
  temperatureElement.innerHTML = `${temperatur}`;
}

let elementCelsius = document.querySelector("#celcious");
elementCelsius.addEventListener("click", showCelsius);

let celsiusTemperature = null;

//___________________________________________________________________

function formatDay(timestamp) {
  let date = new Date(timestamp * 1000);
  let day = date.getDay();
  let days = [
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
    "Monday",
    "Tuesday",
  ];

  return days[day];
}

function displayForecast(response) {
  let forecast = response.data.daily;
  let forecastElement = document.querySelector("#forecast");

  let forecastHTML = `<div class="row">`;
  forecast.forEach(function (forecastDay, index) {
    if (index < 6) {
      forecastHTML =
        forecastHTML +
        `
     <div class="col-2">
        <div class="icon_forecast">
            <img
              class="img_forecast"
              src=" https://openweathermap.org/img/wn/${
                forecastDay.weather[0].icon
              }@2x.png"
            />
        </div>
          <div class="mondaytext">
            <div class="listacuadros">
              <div class="monday">${formatDay(forecastDay.dt)}</div>
            <div class="grados">
              <span class="grades">${Math.round(forecastDay.temp.max)}°</span> |
              <span class="grades2">${Math.round(forecastDay.temp.min)}°</span>
            </div>
            </div>
          </div>
        </div>
        `;
    }
  });

  forecastElement.innerHTML = forecastHTML;
  forecastHTML = forecastHTML + `</div>`;
}

function getForecast(coordinates) {
  console.log(coordinates);
  let apiKey = "cf6b50b908fa2e0baca3eed8a569a5f6";
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayForecast);
}
