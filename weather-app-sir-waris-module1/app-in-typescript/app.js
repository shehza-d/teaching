"use strict";
const cityForm = document.querySelector("#cityForm");
const city = document.querySelector("#city");
const API_KEY =
  "https://api.weatherapi.com/v1/current.json?key=25175e31b7074cfc895204529222906";
const centigrade = document.querySelector("#centigrade");
const messages = document.querySelector("#messages");
const humidity = document.querySelector("#humidity");
const iconElement = document.querySelector("#iconElement");
cityForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const data = await getWeatherData();
  if (!data) return;
  showWeatherData(data);
});
const getWeatherData = async () => {
  try {
    messages.innerText = "";
    const cityName = city.value;
    if (!cityName) return;
    const response = await fetch(`${API_KEY}&q=${cityName}`);
    const data = await response.json(); // Converting response in json
    console.log("🚀 ~ file: script.js:29 ~ getWeatherData ~ data:", data);
    // Error handling
    //   agar response ok nhi hy tw
    if (!response.ok) throw Error(data.error.message);
    //
    return data;
  } catch (err) {
    messages.innerText = err;
  }
};
const showWeatherData = (data) => {
  const icon = data?.current?.condition?.icon;
  centigrade.innerText = `Temperature: ${data?.current?.temp_c}°C`;
  humidity.innerText = `Humidity: ${data?.current?.humidity}%`;
  iconElement.src = icon;
};
