const Appointment = require('../../models/appointment')

module.exports = {
    index,
}



async function index(req, res) {
    let appointment = null
    if(req.user._id){
      appointment = await Appointment.find({user : req.user._id})
    }
    res.json(appointment)
  }