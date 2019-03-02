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
            User.findOne({ googleId: profile.id})
                .then((existingUser) => {
                    if(existingUser) {
                     // --- we already a user with matching google ID in database --->>
                        done(null, existingUser);
                    } else {
                     // --- we don't have this ID in database, so create a new user instance and save to database --->>
                        new User({ googleId: profile.id})
                            .save()
                            .then(user => done(null, user));
                    }
                })



            console.log('access token: ' + accessToken);
            console.log('refresh token: ' + refreshToken);
            console.log('profile: ' + profile);
        }
    )
);

