const express = require('express');
const router = express.Router();
const appointmentsCtrl = require('../../controllers/api/appointments');

router.post('/create', appointmentsCtrl.create);
router.get('/index', appointmentsCtrl.index);
router.delete('/delete/:id', appointmentsCtrl.delete);
router.put('/:id', appointmentsCtrl.update);

module.exports = router;
