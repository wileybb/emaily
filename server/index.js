const express = require('express');
require('./services/passport');
const mongoose = require('mongoose')
const keys = require('./config/keys')
const app = express();

//------------- Calling Required authRoutes Function Immediately ------------>>
require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;

mongoose.connect(keys.mongoURI);

app.listen(PORT);

