const path = require('path');
const express = require('express');
const rootDir = require("../util/path");

const router = express.Router();
const appointmentController=require("../controllers/appointment")


router.get("/", appointmentController.getbooking)

router.post("/appointment",appointmentController.postAddbooking)

router.get('/previous-bookings',appointmentController.getPreviousBookings)

router.delete('/delete-booking/:id',appointmentController.deletebooking)

router.put('/booking/:id',appointmentController.Editbooking)

module.exports = router;


