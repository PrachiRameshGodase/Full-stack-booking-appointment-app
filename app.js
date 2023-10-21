const path = require("path");
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const appointRoutes = require('./routes/appoinment');

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(bodyParser.urlencoded({ extended: true }));

// Parse JSON bodies (as sent by API clients)
app.use(bodyParser.json());

// Include your appointment routes
app.use(appointRoutes);

// Set up your server to listen on port 3000
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
