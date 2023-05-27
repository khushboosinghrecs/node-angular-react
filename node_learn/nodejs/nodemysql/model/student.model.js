const mongoose = require('mongoose');
var studentSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: 'This file is required'
    },
    email:{
        type: String,
        required: 'This file is required'

    },
    mobile:{
        type: Number,
        required: 'This file is required'

    },
    city:{
        type: String,
        required: 'This file is required'

    }
})

mongoose.model('Student', studentSchema);