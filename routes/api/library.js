const router = require('express').Router();
const controller = require('./librarycontroller');

router.route('/all')
    .get(controller.getAll);

module.exports = router;