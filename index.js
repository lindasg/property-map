const express = require('express');
const mongoose = require('mongoose');
require('./models/Properties');
const bodyParser = require('body-parser');
const keys = require('./config/keys');
const getPropertiesData = require('./services/getPropertiesData');
const propertyRoutes = require('./routes/propertyRoutes');

mongoose.Promise = global.Promise;
mongoose.connect(
  keys.mongoURI,
  { useNewUrlParser: true }
);

setInterval(() => {
  const d=new Date().getDate();
  console.log(d);
  if (d > 15 && d < 20) {
    getPropertiesData();
  }
}, 86400000);
//getPropertiesData();

const app = express();

//middlewares
app.use(bodyParser.json());

propertyRoutes(app);

if (process.env.NODE_ENV === 'production') {
  // Express will serve up production assets like our main.js file or main.css file
  app.use(express.static('client/build'));
  //Express will serve up the index.html file if it doesnot recognize the route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);
