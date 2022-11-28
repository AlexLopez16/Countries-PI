const { Router } = require('express')
const { getCountries, countriesById } = require('../controllers/countries')
const router = Router();

router.get('/', getCountries)
router.get('/:id', countriesById)

module.exports = router;