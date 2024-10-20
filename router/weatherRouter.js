const express = require('express');
const router = express.Router();
const weatherController = require('../controllers/weatherController');

router.get('/weather' , weatherController.getWeather);

router.post('/getweather' , weatherController.sendCity);

module.exports=router;