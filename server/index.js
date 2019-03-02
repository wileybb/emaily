const express = require('express');
require('./services/passport');


const app = express();

//------------- Calling Required authRoutes Function Immediately ------------>>
require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;

mongoose.connect(keys.mongoURI);

app.listen(PORT);

//making a change for git