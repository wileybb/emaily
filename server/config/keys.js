// keys.js - figure out what set of credentials to return
if(process.env.NODE_ENV === 'production') {
    // we are in production, return production keys (require and export prod keys)
    module.exports = require('./prod');
} else {
    // we are in development, return dev keys (...requiring dev.js in and exporting those keys in same line...)
    module.exports = require('./dev');
}