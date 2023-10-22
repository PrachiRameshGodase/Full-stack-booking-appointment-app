const express = require('express');
const bodyParser = require('body-parser');
const app = express();


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


const appointRoutes = require('./routes/appointment');
app.use('/', appointRoutes);  


app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
