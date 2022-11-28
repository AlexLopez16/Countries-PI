const { Router } = require('express');
const router = Router();

router.use('/countries', require('./countries'))
router.use('/activities', require('./activities'))

module.exports = router;
