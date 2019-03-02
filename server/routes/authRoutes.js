// ---------------- Requiring Original Node Passport Module (not our file)------------------->>
const passport = require('passport');

// ---------------- Route Handlers for GoogleOAuth (exported as a function)------------------>>
module.exports = app => {
    app.get(
        '/auth/google',
        passport.authenticate('google', {
            scope: ['profile', 'email']
        })
    )

    app.get('/auth/google/callback', passport.authenticate('google'));
};