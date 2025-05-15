function fetchWeather() {
  let searchInput = document.getElementById("search").value;
  const weatherDataSection = document.getElementById("weather-data");
  weatherDataSection.style.display = "block";
  const apiKey = "REPLACE WITH YOUR API KEY"; 
    if (searchInput == "") {
        weatherDataSection.innerHTML = `
        <div>
        <h2>Empty Input!</h2>
        <p>Por Favor tente novamente com uma <u>cidade válida</u>.</p>
        </div>
        `;
        return;
    }

    async function getLonAndLat() {

    }

    async function getWeatherData(lon, lat) {

    }
}