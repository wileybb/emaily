const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose')
const keys = require('../config/keys')

const User = mongoose.model('users');

// -------------------- Configuring Passport with googleOAuth strategy-------------------->>
passport.use(
    new GoogleStrategy(
        {
            clientID: keys.googleClientID,
            clientSecret: keys.googleClientSecret,
            callbackURL: '/auth/google/callback'
        },
        (accessToken, refreshToken, profile, done) => {
            // ------- Creating new model instance of User then saving it to database ----->>
            new User({ googleId: profile.id}).save();


            console.log('access token: ' + accessToken);
            console.log('refresh token: ' + refreshToken);
            console.log('profile: ' + profile);
        }
    )
);

