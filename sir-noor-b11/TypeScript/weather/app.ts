// https://home.openweathermap.org/api_keys
const API_KEY = "21b776b8f103d8742f43ac6f5928e618";
const form = document.querySelector("#myForm")!;
const cityInput = document.querySelector("#cityInput")!;
const temp = document.querySelector("#temp")!;
const humidity = document.querySelector("#humidity")!;
const message = document.querySelector("#message")!;
const btn = document.querySelector("#getWeatherBtn")!;

const formHandler = async (event: FormDataEvent) => {
  try {
    event.preventDefault(); // prevents page refresh

    message.innerText = "loading"; // showing loading
    temp.innerText = "";
    humidity.innerText = "";
    btn.disabled = true; // disable button so user doesn't click button more than once

    const city = cityInput.value;

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    if (!response.ok) throw new Error("error hy koi");
    const data = await response.json();

    form.reset(); // to clear input value only if form is submitted successfully

    temp.innerText = `${data.main.temp}°C`;
    humidity.innerText = data.main.humidity;

    console.log("🚀 ~ formHandler ~ ", data);

    //
  } catch (error) {
    console.log("error", error);
    message.innerText = "error";
    //
  } finally {
    console.log("finally will run in every situation");

    // message.innerText = ""; // clearing old msgs

    btn.disabled = false;
  }
  console.log("last line of function");
};

form.addEventListener("submit", formHandler);

//
