
const express = require('express');
const router = express.Router();
const ensureLoggedIn = require('../../config/ensureLoggedIn');
const appointmentsCtrl = require('../../controllers/api/appointments');


router.get('/index', ensureLoggedIn, appointmentsCtrl.index);
router.post('/create', ensureLoggedIn, appointmentsCtrl.create);
router.get(`/:selectedAppointment`, ensureLoggedIn, appointmentsCtrl.show)
router.delete('/delete/:id', ensureLoggedIn, appointmentsCtrl.delete);
router.put('/:id', ensureLoggedIn, appointmentsCtrl.update);


module.exports = router;
