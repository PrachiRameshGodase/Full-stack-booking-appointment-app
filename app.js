const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./util/database');
const cors=require('cors')

const appointmentRoutes = require('./routes/appointment'); // Corrected import path

const app = express();

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'public')));



app.use('/', appointmentRoutes); // Use the correct routes variable

sequelize.sync().then(result => {
  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });
}).catch(err => {
  console.log(err);
});
