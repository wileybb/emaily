const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');

require('./models/user');
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();

// --- telling passport to use cookies --->
app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 1000,
        keys: [keys.cookieKey]
    })
)
app.use(passport.initialize());
app.use(passport.session());

//------------- Importing and calling exported authRoutes function immediately without saving it to a variable------------>>
require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;



app.listen(PORT);

