const { Router } = require('express');
const router = Router();

router.use('/countries', require('../controllers/countries'))
router.use('/activities', require('../controllers/activities'))


module.exports = router;
