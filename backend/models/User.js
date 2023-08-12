// this file is for destructuring in javascript
const mongoose = require('mongoose');

const { Schema } = mongoose;

const UserSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    location:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    date:{
        type:Date,
        default:Date.now
    }

})
// this line creates collection in Atlas based on above schema
// with name user
module.exports = mongoose.model('user',UserSchema);