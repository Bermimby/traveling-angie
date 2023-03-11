const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const appointmentSchema = new Schema({
    date: { 
        type: Date, 
        default: null, 
        required: true 
    },
    appointmentTime: { 
        type: Date, 
        required: true 
    },
    location: { 
        type: String, 
        required: true 
    }
}, {
    timestamps: true
});



module.exports = mongoose.model('Appointment', appointmentSchema)