# Weather Dashboard

## Description

This project is a simple weather dashboard created using HTML, CSS, and JavaScript. It allows users to search for a city and view its current weather information using the Open-Meteo API.

## Features

- Search for a city by name.
- Display the current temperature and weather conditions.
- Show a weather icon based on the weather condition.
- Display humidity, wind speed, and feels-like temperature.
- Show a loading message while fetching weather data.
- Display an error message if the city is not found or the request fails.
- Responsive design for desktop and mobile devices.

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Vite
- Fetch API
- Open-Meteo API

## API

This project uses the Open-Meteo API to get weather information.

Two API endpoints are used:

- Geocoding API: Finds the latitude and longitude of the city entered by the user.
- Weather Forecast API: Gets the current weather information using these coordinates.

No API key is required for this project.

API documentation: https://open-meteo.com/en/docs

## How to Run the Project

1. Download or clone the repository.
2. Open the project folder in VS Code.
3. Open the terminal.
4. Install the dependencies:

   `npm install`

5. Start the development server:

   `npm run dev`

6. Open the local URL displayed in the terminal.

## How to Use

1. Enter a city name in the search field.
2. Click the Search button.
3. Wait for the weather information to load.
4. View the temperature, weather description, humidity, wind speed, and feels-like temperature.

## Project Structure

- `index.html`: Contains the structure of the webpage.
- `src/style.css`: Contains the design and responsive layout.
- `src/main.js`: Handles user interactions, loading, and errors.
- `src/api.js`: Fetches weather data from the API.
- `src/render.js`: Displays the weather information on the page.
- `screenshots/`: Contains screenshots of the application.



