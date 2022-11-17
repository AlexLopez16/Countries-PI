const axios = require('axios');
const { Country } = require('../db')

const countriesDB = async () => {
    try {
        const getCountries = await axios.get('https://restcountries.com/v3/all');
        const { data } = getCountries;

        const countries = data.map(country => ({
            id: country.cca3,
            name: country.name.common,
            flag: country.flags[0],
            continent: country.continents[0],
            capital: country.capital ? country.capital[0] : 'no data',
            subregion: country.subregion || 'no data',
            area: country.area,
            population: country.population
        }))

        const countriesDb = await Country.findAll();

        if (!countriesDb.length) {
            const newDb = await Country.bulkCreate(countries)
            return newDb;
        }

        return getCountries;
    } catch (error) {
        console.log(error)
    }
}

module.exports = countriesDB;
