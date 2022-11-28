const { response, request } = require('express');
const { Country, Activity } = require('../db');

const getActivities = async (req, res = response) => {
    try {
        const activities = await Activity.findAll({
            include: {
                model: Country
            }
        });

        if (!activities.length) {
            return res.status(404).json({
                msg: 'There are no activities to show'
            })
        }

        res.status(200).json(activities)
    } catch (error) {
        res.status(500).json({
            msg: error.message
        })
    }
}

const createActivity = async (req = request, res = response) => {
    const { name, difficulty, duration, season, countries } = req.body;

    try {
        const newActivity = await Activity.create({
            name,
            difficulty,
            duration,
            season
        })

        if (countries) {
            countries.map(async country => {
                const countryFound = await Country.findOne({
                    where: {
                        name: country
                    }
                })
                newActivity.addCountry(countryFound)
            })
        }

        res.status(200).json({
            msg: 'Activity created'
        })
    } catch (error) {
        res.status(500).json({
            msg: error.message
        })
    }
}

const updateActivity = async (req = request, res = response) => {
    const { id } = req.params;
    const { countries } = req.body;

    try {
        const activityUpdated = await Activity.update(req.body, {
            where: {
                id
            }
        })

        if (activityUpdated[0] < 1) {
            return res.status(400).json({
                msg: `Activity with Id ${id} doesn´t exist`
            })
        }

        const activity = await Activity.findOne({
            where: { id },
            include: [
                {
                    model: Country
                }
            ]
        })

        if (countries) {
            activity.setCountries([])

            countries.map(async country => {
                const countryFound = await Country.findOne({
                    where: {
                        name: country
                    }
                })
                await activity.addCountries(countryFound)
            })
        }

        res.status(200).json({
            msg: 'Activity updated'
        })
    } catch (error) {
        res.status(500).json({
            msg: error.message
        })
    }
}

const deleteActivity = async (req = request, res = response) => {
    const { id } = req.params;

    try {
        const activityDeleted = await Activity.destroy({
            where: {
                id
            }
        })

        if (activityDeleted < 1) {
            return res.status(400).json({
                msg: `Activity with Id ${id} doesn´t exist`
            })
        }

        res.status(200).json({
            msg: 'Activity deleted'
        })
    } catch (error) {
        res.status(500).json({
            msg: error.message
        })
    }
}

module.exports = {
    getActivities,
    createActivity,
    updateActivity,
    deleteActivity
}