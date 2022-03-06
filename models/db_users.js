
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
    },
    role:{
        type: String,
        enum:['trainer', 'orgenizer', 'in_comp', 'in_workshop'],
        default:'in_comp',
    },
    workshop:{
        type: String,
        default: 'no_workshop', 
        enum:['UI/UX', 'Data Science', 'React', 'Mobile', 'no_workshop']
    },
    team: {
        type: String,
        default: 'Without team',
    }
},{
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
});

module.exports = mongoose.model('user', usersSchema);