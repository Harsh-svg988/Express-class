
const router = require('express').Router();
const userControllers = require('../controllers/userControllers');

// Create
router.post('/', userControllers.createUser);

module.exports = router;