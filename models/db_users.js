
const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
    firstname:{
        type: String,
        default: "firstname"
    },
    familyname:{
        type: String,
        default:"familyName"
    },
    email:{
        type: String,
        required: [true, "please enter an email @"]
    },
    checkedIn:{
        type: Boolean,
        default: false
    }
},{
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
});

module.exports = mongoose.model('user', usersSchema);