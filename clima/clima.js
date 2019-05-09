const axios = require('axios');

const getClima = async(lat, lon) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=a6b41d1cd1677928cb3a831b7d724ad4&units=metric`);

    return resp.data.main.temp;

}

module.exports = {
    getClima
}