function getWeather() {
  const city = document.getElementById("city").value;
  const apiKey = "da1afb52695b46e092b195753232712"; // Replace with your API key

  const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      const temperatureCelsius = data.current.temp_c;
      const temperatureFahrenheit = data.current.temp_f;
      const humidity = data.current.humidity;
      const windSpeed = data.current.wind_kph; // Wind speed in km/h
      const pressure = data.current.pressure_mb; // Pressure in millibars
      const weatherIconUrl = data.current.condition.icon;
      const name = data.location.name;
      const region = data.location.region;
      const country = data.location.country;
      const localtime = data.location.localtime;

      document.getElementById(
        "temperature"
      ).innerText = `Temperature: ${temperatureCelsius}°C`;

      document.getElementById("humidity").innerText = `Humidity: ${humidity}%`;

      document.getElementById(
        "wind"
      ).innerText = `Wind Speed: ${windSpeed} km/h`;

      document.getElementById(
        "pressure"
      ).innerText = `Pressure: ${pressure} mb`;

      // Set the weather icon
      document.getElementById("weather-icon").src = weatherIconUrl;

      document.getElementById(
        "name"
      ).innerText = `Address : ${name} ,${region}, ${country}  `;
      document.getElementById(
        "localtime"
      ).innerText = `Localtime : ${localtime}`;
    })
    .catch((error) => {
      alert("Please enter valid city...");
    });

  function toggleTheme() {
    const body = document.body;
    body.classList.toggle("dark-theme");
  }
}

function toggleTheme() {
  const body = document.body;
  body.classList.toggle("dark-theme");

  // Check if the dark theme is currently applied
  const isDarkTheme = body.classList.contains("dark-theme");

  // Update the theme toggle button icon based on the theme
  const themeToggleIcon = document.getElementById("theme-toggle-bottom");
  themeToggleIcon.innerHTML = isDarkTheme
    ? '<i class="fa-solid fa-sun"></i>' // Icon for light theme
    : '<i class="fa-solid fa-moon"></i>'; // Icon for dark theme
}
