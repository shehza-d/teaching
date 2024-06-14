"use strict";
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
// https://home.openweathermap.org/api_keys
const API_KEY = "21b776b8f103d8742f43ac6f5928e618";
const form = document.querySelector("#myForm");
const cityInput = document.querySelector("#cityInput");
const temp = document.querySelector("#temp");
const humidity = document.querySelector("#humidity");
const message = document.querySelector("#message");
const btn = document.querySelector("#getWeatherBtn");
const formHandler = (event) =>
  __awaiter(void 0, void 0, void 0, function* () {
    try {
      event.preventDefault(); // prevents page refresh
      message.innerText = "loading"; // showing loading
      temp.innerText = "";
      humidity.innerText = "";
      btn.disabled = true; // disable button so user doesn't click button more than once
      const city = cityInput.value;
      const response = yield fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`,
      );
      if (!response.ok) throw new Error("error hy koi");
      const data = yield response.json();
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
  });
form.addEventListener("submit", formHandler);
//
