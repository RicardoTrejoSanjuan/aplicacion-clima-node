const axios = require('axios');

const getLugarLatLng = async(direccionRecibida) => {
    const encodeUrl = encodeURI(direccionRecibida);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
        headers: {
            'X-RapidAPI-Host': 'devru-latitude-longitude-find-v1.p.rapidapi.com',
            'X-RapidAPI-Key': 'a1d6e3b56dmshe8c8f367c99483bp19c279jsn7cb7be3df95d'
        }
    });

    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${direccionRecibida}`);
    }

    const data = resp.data.Results[1];

    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        direccion,
        lat,
        lng
    };

}

module.exports = {
    getLugarLatLng
}