const axios = require("axios");

exports.getWeather = (req, res) => {
  res.render("index" , { city: null, temp: null, wind: null, icon: null ,error:null});
};

exports.sendCity = async (req, res) => {
  const cityName = req.body.city;

  if (!cityName || cityName.trim() === "") {
    return res.render("index", { city: null, temp: null, wind: null, icon: null, error: 'Please enter a city name.' });
  }

  const apiKey = process.env.API_KEY;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric&lang=en`;

  try {
    const response = await axios.get(url);
    const city = response.data.name;
    const temp = response.data.main.temp;
    const wind = response.data.wind.speed;
    const icon = `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`;

    res.render("index", { city, temp, wind, icon, error: null });
  } catch (error) {
    console.error('Error fetching weather data:', error);
    res.render('index', { city: null, temp: null, wind: null, icon: null, error: 'Error retrieving weather data. Please try again.' });
  }
};
