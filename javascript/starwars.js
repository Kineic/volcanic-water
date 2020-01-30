

const swapi = require('swapi-node');

swapi.getPerson(1).then((result) => {
    console.log(result);
});