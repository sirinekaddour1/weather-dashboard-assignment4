
/* Import the CSS file */
import "./style.css";

/* Import the function that gets weather data */
import { loadWeather } from "./api.js";

/* Import the function that displays weather data */
import { renderWeather } from "./render.js";

/* Select the form from the HTML page */
const form = document.querySelector("#weather-form");

/* Select the city input */
const input = document.querySelector("#city-input");

/* Select the search button */
const searchBtn = document.querySelector("#search-btn");

/* Select the status message */
const status = document.querySelector("#status");

/* Select the weather results section */
const result = document.querySelector("#weather-result");

/* Select the retry button */
const retryBtn = document.querySelector("#retry-btn");

/* Function to update the status of the application */
function setStatus(state, message) {

  status.dataset.state = state; // Set the current state

  status.textContent = message; // Display the status message

  searchBtn.disabled = state === "loading"; // Disable Search while loading

  retryBtn.hidden = state !== "error"; // Show Retry only if there is an error
}

/* Function to search for the weather */
async function onSearch(event) {

  event.preventDefault(); // Prevent the form from reloading the page

  const city = input.value.trim(); // Get the city name and remove extra spaces

  if (!city) { // Check if the input is empty

    result.hidden = true; // Hide previous weather results

    setStatus("error", "Please enter a city name."); // Show an error message

    return; // Stop the function
  }

  result.hidden = true; // Hide previous weather results

  setStatus("loading", `Loading weather for ${city}...`); // Show loading message

  try { // Try to get the weather data

    const data = await loadWeather(city); // Wait for weather data from the API

    renderWeather(data); // Display the weather information

    setStatus("success", "Weather updated successfully."); // Show success message

  } catch (error) { // Catch errors from the API or rendering

    result.hidden = true; // Hide weather results if an error happens

    setStatus("error", error.message); // Display the error message

  }
}

/* Run the search function when the form is submitted */
form.addEventListener("submit", onSearch);

/* Retry the search when the retry button is clicked */
retryBtn.addEventListener("click", () => {

  form.requestSubmit(); // Submit the form again

});
