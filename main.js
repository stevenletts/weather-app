import "./style.css";
import { LocationData } from "./location.js";
import { WeatherData } from "./weather.js";
import img from "./images/vincentiu-solomon-ln5drpv_ImI-unsplash.jpg";
import img2 from "./images/janaine-arioli-sAtNmpS66n4-unsplash.jpg";

async function getWeather() {
  try {
    const respone = await fetch(
      "https://api.weatherapi.com/v1/current.json?key=a3397bb6b09545328d0112925232003&q=london",
      { mode: "cors" }
    );
    const responseData = await respone.json();
    const location = new LocationData(responseData.location);
    const weather = new WeatherData(responseData.current);
    displayWeather(location, weather);
  } catch (error) {
    console.error(error);
  }
}

function displayWeather(loc, weather, degOrFaren = 1) {
  const iconArea = document.querySelector(".icon-and-temp");
  formatIconArea(
    iconArea,
    degOrFaren ? weather.deg : weather.faren,
    weather.icon
  );
  const descArea = document.querySelector(".description");
  formatDesc(descArea, weather.desc);
  const placeArea = document.querySelector(".place-time");
  formatPlaceAndTime(placeArea, loc.country, loc.name, loc.time);
  const feelsArea = document.querySelector(".feels");
  formatFeelsArea(feelsArea, degOrFaren ? weather.feelDeg : weather.feelFar);
  const wind = document.querySelector(".wind");
  formatWind(wind, degOrFaren ? weather.kphGust : weather.mphGust);
  dayOrNight(weather.day);
}

function clear() {
  const iconArea = document.querySelector(".icon-and-temp");
  const descArea = document.querySelector(".description");
  const placeArea = document.querySelector(".place-time");
  const feelsArea = document.querySelector(".feels");
  const wind = document.querySelector(".wind");
  iconArea.innerHTML = "";
  descArea.innerHTML = "";
  placeArea.innerHTML = "";
  feelsArea.innerHTML = "";
  wind.innerHTML = "";
}

function formatWind(parent, windSpeed) {
  const h3 = document.createElement("h3");
  h3.innerHTML = `Windspeed: ${windSpeed}`;
  appendItems(parent, h3);
}

function formatFeelsArea(parent, feels) {
  const h2 = document.createElement("h2");
  h2.innerHTML = `Feels like: ${feels}`;
  appendItems(parent, h2);
}

function formatPlaceAndTime(parent, country, name, time) {
  const p = document.createElement("p");
  p.innerText = `${name}, ${country}, ${time}`;
  appendItems(parent, p);
}

function formatDesc(parent, desc) {
  const descItem = document.createElement("p");
  descItem.innerText = desc;
  appendItems(parent, descItem);
}

function formatIconArea(parent, temp, icon) {
  const temperatureArea = document.createElement("h1");
  temperatureArea.innerHTML = temp;
  const iconArea = document.createElement("img");
  iconArea.src = icon;
  iconArea.alt = "weather display icon";
  appendItems(parent, temperatureArea, iconArea);
}

function appendItems(parent, ...children) {
  for (let child of children) {
    parent.appendChild(child);
  }
}

async function searchWeather(search) {
  try {
    const respone = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=a3397bb6b09545328d0112925232003&q=${search}`,
      { mode: "cors" }
    );
    const responseData = await respone.json();
    console.log(responseData);
    const location = new LocationData(responseData.location);
    const weather = new WeatherData(responseData.current);
    clear();
    displayWeather(location, weather);
  } catch (error) {
    console.error(error);
    alert("location not found");
  }
}

function dayOrNight(bool) {
  if (!bool) {
    document.body.style.backgroundImage = `url(${img})`;
  } else {
    document.body.style.backgroundImage = `url(${img2})`;
  }
}

const submitLoc = document.querySelector("#submit");
submitLoc.addEventListener("click", () => {
  let searchTerm = document.querySelector("#location");
  searchWeather(searchTerm.value);
  searchTerm.value = "";
});

getWeather();
