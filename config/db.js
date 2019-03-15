const mongoose = require('mongoose');

// DB Config
const db = require('./keys').mongoURI;

// Map global promises
mongoose.Promise = global.Promise;
//Mongoose Connection
mongoose
  .connect(
    'mongodb://amsalud:scrapers2016@ds123625.mlab.com:23625/pusher-poll',
    { useNewUrlParser: true }
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));
