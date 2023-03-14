const express = require('express');
const router = express.Router();
const ensureLoggedIn = require('../../config/ensureLoggedIn');
const appointmentsCtrl = require('../../controllers/api/appointment');


router.get('/index', ensureLoggedIn, appointmentsCtrl.index);
router.post('/create', ensureLoggedIn, appointmentsCtrl.create);
router.delete('/delete/:id', ensureLoggedIn, appointmentsCtrl.delete);
router.put('/:id', ensureLoggedIn, appointmentsCtrl.update);


module.exports = router;