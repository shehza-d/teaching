const cityForm = document.querySelector("#cityForm")!;
const city: HTMLInputElement = document.querySelector("#city")!;
const API_KEY =
  "https://api.weatherapi.com/v1/current.json?key=25175e31b7074cfc895204529222906";
const centigrade: HTMLElement = document.querySelector("#centigrade")!;
const messages: HTMLElement = document.querySelector("#messages")!;
const humidity: HTMLElement = document.querySelector("#humidity")!;
const iconElement: HTMLImageElement = document.querySelector("#iconElement")!;

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
  } catch (err: any) {
    messages.innerText = err;
  }
};

const showWeatherData = (data: any) => {
  const icon = data?.current?.condition?.icon;

  centigrade.innerText = `Temperature: ${data?.current?.temp_c}°C`;
  humidity.innerText = `Humidity: ${data?.current?.humidity}%`;

  iconElement.src = icon;
};
