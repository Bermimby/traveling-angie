const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const appointmentSchema = new Schema({
    date: { 
        type: Date, 
    },
    appointmentTime: { 
        type: String, 
    },
    location: { 
        type: String, 
    }
}, {
    timestamps: true
});



module.exports = mongoose.model('Appointment', appointmentSchema)