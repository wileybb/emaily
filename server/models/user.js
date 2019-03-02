const mongoose = require('mongoose');
// const Schema = mongoose.Schema;
// ------ below: destructured version line 2 above (equivalent to ^^)------
const { Schema } = mongoose;

const userSchema = new Schema ({
    googleId: String
})

mongoose.model('users', userSchema);