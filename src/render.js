
/* Function to get the weather description and icon */
function getWeatherInfo(code) {

  if (code === 0) { // Check if the sky is clear
    return { description: "Clear sky", icon: "☀️" }; // Return clear sky information
  }

  if (code >= 1 && code <= 3) { // Check if the sky is cloudy
    return { description: "Partly cloudy", icon: "⛅" }; // Return cloudy weather
  }

  if (code === 45 || code === 48) { // Check if there is fog
    return { description: "Foggy", icon: "🌫️" }; // Return foggy weather
  }

  if (code >= 51 && code <= 67) { // Check if there is drizzle or rain
    return { description: "Rainy", icon: "🌧️" }; // Return rainy weather
  }

  if (code >= 71 && code <= 77) { // Check if there is snow
    return { description: "Snowy", icon: "❄️" }; // Return snowy weather
  }

  if (code >= 80 && code <= 82) { // Check if there are rain showers
    return { description: "Rain showers", icon: "🌦️" }; // Return rain showers
  }

  if (code >= 85 && code <= 86) { // Check if there are snow showers
    return { description: "Snow showers", icon: "🌨️" }; // Return snow showers
  }

  if (code >= 95 && code <= 99) { // Check if there is a thunderstorm
    return { description: "Thunderstorm", icon: "⛈️" }; // Return thunderstorm information
  }

  return { description: "Unknown weather", icon: "🌤️" }; // Return default weather information
}

/* Function to display weather data on the page */
export function renderWeather(data) {

  const current = data.current; // Get the current weather data

  const weather = getWeatherInfo(current.weather_code); // Get the description and icon

  // Display the city and country
  document.querySelector("#city-name").textContent =
    `${data.name}, ${data.country}`; // Show the city and country names

  // Display the current temperature
  document.querySelector("#temperature").textContent =
    `${Math.round(current.temperature_2m)}°C`; // Round and display temperature

  // Display the weather description
  document.querySelector("#description").textContent =
    weather.description; // Show the weather condition

  // Display the weather icon
  const icon = document.querySelector("#weather-icon"); // Find the icon element
  icon.textContent = weather.icon; // Add the weather icon
  icon.setAttribute("aria-label", weather.description); // Add an accessible description

  // Display the humidity percentage
  document.querySelector("#humidity").textContent =
    `${current.relative_humidity_2m}%`; // Show humidity

  // Display the wind speed
  document.querySelector("#wind").textContent =
    `${current.wind_speed_10m} km/h`; // Show wind speed

  // Display the feels-like temperature
  document.querySelector("#feels-like").textContent =
    `${Math.round(current.apparent_temperature)}°C`; // Show the feels-like temperature

  // Show the weather results section
  document.querySelector("#weather-result").hidden = false; // Make the results visible
}
