function formatDate(timestamp) {
  let date = new Date(timestamp);
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  return `${day} ${hours}:${minutes}`;
}

function displayTemperature(response) {
  let temperatureElememt = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElememt = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let dateElememt = document.querySelector("#date");
  temperatureElememt.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
  humidityElememt.innerHTML = response.data.main.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
  dateElememt.innerHTML = formatDate(response.data.dt * 1000);
}

let apiKey = "9ece65da0f72264bfe679ddf770d6e93";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Singapore&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
