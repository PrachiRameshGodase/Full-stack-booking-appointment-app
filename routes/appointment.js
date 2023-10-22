const path = require('path');
const express = require('express');
const rootDir = require("../util/path");

const router = express.Router();
const appointmentController=require("../controllers/appointment")


router.get("/", appointmentController.getbooking)

console.log(router.post("/",appointmentController.postAddbooking))

router.delete("/",appointmentController.deletebooking)

// router.get("/", (req, res, next) => {
//   res.sendFile(path.join(rootDir, "views", "appointment.html"));
// });

// router.post("/", (req, res, next) => {
//   console.log(JSON.stringify(req.body));
//   res.redirect("/");
// });


module.exports = router;


