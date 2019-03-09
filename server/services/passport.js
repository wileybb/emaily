const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose')
const keys = require('../config/keys')

const User = mongoose.model('users');


// -- making cookie
passport.serializeUser((user, done) => {
    //--- below, user.id is the user number that is assigned by mongo automatically --->>
    done(null, user.id);
});
// -- getting data from cookie 
passport.deserializeUser((id, done) => {
    User.findById(id).then(user => {
            done(null, user);
        });    
});

// -------------------- Configuring Passport with googleOAuth strategy-------------------->>
passport.use(
    new GoogleStrategy(
        {
            clientID: keys.googleClientID,
            clientSecret: keys.googleClientSecret,
            callbackURL: '/auth/google/callback',
            proxy: true
        },
        async (accessToken, refreshToken, profile, done) => {
            const existingUser = await User.findOne({ googleId: profile.id});
   
            if(existingUser) {
                return done(null, existingUser);
            }
            const user = await new User({ googleId: profile.id}).save();
            done(null, user);
         console.log('access token: ' + accessToken);
         console.log('refresh token: ' + refreshToken);
         console.log('profile: ' + profile);           
        }

        
    )
);

