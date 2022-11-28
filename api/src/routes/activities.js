const { Router } = require('express');
const router = Router();
const { getActivities, createActivity, updateActivity, deleteActivity } = require('../controllers/activities');

router.get('/', getActivities)

router.post('/', createActivity)

router.put('/:id', updateActivity)

router.delete('/:id', deleteActivity)

module.exports = router;