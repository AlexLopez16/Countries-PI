const { response, request } = require('express');
const { Country, Activity } = require('../db');
const { Op } = require('sequelize')

const getCountries = async (req = request, res = response) => {
    const { name } = req.query;

    try {
        let countries = await Country.findAll()

        if (name) {
            countries = await Country.findAll({
                where: {
                    name: { [Op.iLike]: `${name}%` }
                },
            })
        }

        if (!countries.length) {
            return res.status(404).json({
                msg: `Country ${name} not found`
            })
        }

        res.status(200).json(countries)
    } catch (error) {
        res.status(500).json({
            msg: error.message
        })
    }
}

const countriesById = async (req, res) => {
    const id = req.params.id.toUpperCase();

    try {
        if (id.length !== 3) {
            return res.status(400).json({
                msg: 'ID must be only 3 characters'
            })
        }

        const country = await Country.findByPk(id, {
            include: Activity
        })

        if (!country) {
            return res.status(404).json({
                msg: `Country with id ${id} not found`
            })
        }

        res.status(200).json(country)
    } catch (error) {
        res.status(500).json({
            msg: error.message
        })
    }
}

module.exports = {
    getCountries,
    countriesById
}