// // src/Weather.js

// import React, { useState } from 'react';
// import axios from 'axios';

// const Weather = () => {
//   const [data, setData] = useState({});
//   const [location, setLocation] = useState('');

//   const apiKey = '13837a4c9e017ba2a7e0ba83b9bee7af'; // Replace with your OpenWeatherMap API key
//   const apiUrl = `https://api.openweathermap.org/data/2.5/weather`;

//   const searchLocation = (event) => {
//     if (event.key === 'Enter') {
//       axios.get(apiUrl, {
//         params: {
//           q: location,
//           units: 'metric', // or 'imperial' for Fahrenheit
//           APPID: apiKey,
//         },
//       })
//       .then((response) => {
//         setData(response.data);
//         setLocation('');
//       })
//       .catch((error) => {
//         console.error('Error fetching data: ', error);
//       });
//     }
//   };

//   return (
//     <div className="weather-container">
//       <input 
//         type="text"
//         value={location}
//         onChange={(event) => setLocation(event.target.value)}
//         onKeyPress={searchLocation}
//         placeholder="Enter Location"
//       />

//       {data.main && (
//         <div className="weather-info">
//           <h2>{data.name}</h2>
//           <p>{data.weather[0].main}</p>
//           <p>{data.main.temp}°C</p>
//           <p>Wind Speed: {data.wind.speed} m/s</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Weather;



// src/Weather.js

import React, { useState } from 'react';
import axios from 'axios';

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [location, setLocation] = useState('');
  const [error, setError] = useState('');

  const apiKey = process.env.REACT_APP_OPENWEATHER_API_KEY; // Using environment variable
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather`;

  const fetchWeather = async (loc) => {
    try {
      const response = await axios.get(apiUrl, {
        params: {
          q: loc,
          units: 'metric',
          APPID: apiKey,
        },
      });
      setWeatherData(response.data);
      setLocation('');  // Clear the input
      setError('');     // Clear any previous errors
    } catch (err) {
      setError('Failed to fetch weather data');
      console.error(err);
    }
  };

  const handleSearch = (event) => {
    if (event.key === 'Enter') {
      fetchWeather(location);
    }
  };

  return (
    <div className="weather-container">
      <input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        onKeyDown={handleSearch}
        placeholder="Enter Location"
        className="weather-input"
      />

      {error && <p className="weather-error">{error}</p>}

      {weatherData && (
        <div className="weather-info">
          <h2>{weatherData.name}</h2>
          <p>{weatherData.weather[0].description}</p>
          <p>{weatherData.main.temp}°C</p>
          <p>Wind Speed: {weatherData.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
};

export default Weather;
