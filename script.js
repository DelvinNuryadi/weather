const apiKey = "0ef46189cb2449c2edc480adaa46002e";
const apiURL =
   "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
   const response = await fetch(apiURL + city + `&appid=${apiKey}`);
   var data = await response.json();

   document.querySelector(".city").innerHTML = data.name;
   document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°c";
   document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
   document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

   if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "img/clouds.png";
   } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "img/clear.png";
   } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "img/drizzle.png";
   } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "img/rain.png";
   } else if (data.weather[0].main == "Snow") {
      weatherIcon.src = "img/snow.png";
   } else if (data.weather[0].main == "Wind") {
      weatherIcon.src = "img/wind.png";
   }

   document.querySelector(".weather").style.display = "block";
}

searchBtn.addEventListener("click", () => {
   checkWeather(searchBox.value);
});
