const express = require('express');
const mongoose = require('mongoose')
const keys = require('./config/keys')

require('./models/user');
require('./services/passport');

const app = express();

mongoose.connect(keys.mongoURI);

//------------- Calling exported authRoutes function immediately without saving it to a variable------------>>
require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;



app.listen(PORT);

