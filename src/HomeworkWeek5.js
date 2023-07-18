function searchCity(city) {
  let apiKey = "783aa1acb98cb9ce6d0b2deaf43e1cbf";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric`;
  axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemperature);
}

searchCity("Puerto Rico");

function showTemperature(response) {
  console.log(response);
  let cityElement = document.querySelector("#cit");
  cityElement.innerHTML = response.data.name;

  let temperatur = Math.round(response.data.main.temp);
  let temperatureElement = document.querySelector("#numerogrande");
  temperatureElement.innerHTML = `${temperatur}`;
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
  let apiKey = "783aa1acb98cb9ce6d0b2deaf43e1cbf";
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

dia.innerHTML = `${completo1}
Clouds`;
