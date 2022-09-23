const router = require('express').Router();
const userRoutes = require('./pizza-routes');

// add prefix
router.use('/user', userRoutes);

module.exports = router;
