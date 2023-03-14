const Appointment = require('../../models/appointment')

module.exports = {
  index,
  create,
  delete: deleteAppointment,
  update
};

async function index(req, res) {
  let appointment = null
  if(req.user){
    appointment = await Appointment.find({user : req.user._id})
  }
  res.json(appointment)
}

async function create(req, res) {
  req.body.user = req.user._id
  const newAppointment = await Appointment.create(req.body);
  return res.json(newAppointment)
}

async function deleteAppointment(req, res) {
  const delAppointment = await Appointment.findByIdAndRemove(req.params.id);
  const appointment = await Appointment.find({user : req.user._id})
  return res.json(appointment)
}

async function update(req, res) {
  const updAppointment = await Appointment.findByIdAndUpdate(req.params.id, req.body);
  return res.json(updAppointment)
}
