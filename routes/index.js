const router = require('express').Router();
const libraryRoutes = require('./api/library');

router.use('/library', libraryRoutes);

module.exports = router;