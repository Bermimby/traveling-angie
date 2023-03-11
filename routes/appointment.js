const express = require('express');
const router = express.Router();
const ensureLoggedIn = require('../../config/ensureLoggedIn');
const appointmentCtrl = require('../../controllers/api/appoinntment');


router.get('index,appointmentCtrl.index');
