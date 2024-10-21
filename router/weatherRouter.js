const express = require('express');
const router = express.Router();
const weatherController = require('../controllers/weatherController');

router.get('/weather' , weatherController.getWeather);

router.post('/getweather' , weatherController.sendCity);

router.get("/autocomplete", weatherController.getCitySuggestions);

module.exports=router;