function displayTemperature(response) {
  let temperatureElememt = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElememt = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  temperatureElememt.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
  humidityElememt.innerHTML = response.data.main.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
}

let apiKey = "9ece65da0f72264bfe679ddf770d6e93";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Singapore&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
