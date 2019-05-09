const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').option({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

// lugar.getLugarLatLng(argv.direccion)
//     .then(res => console.log(res))
//     .catch(err => console.error(err));

// clima.getClima(28.350000, -106.800003)
//     .then(res => console.log(res))
//     .catch(err => console.error(err));

const getInfo = async(direccion) => {
    try {
        const coords = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(coords.lat, coords.lng);
        return `El clima de ${direccion} es de ${temp}.`;
    } catch (error) {
        return `No se pudo determinar el clima de ${direccion}.`;
    }
}

getInfo(argv.direccion).then(res => console.log(res))
    .catch(err => console.error(err));