const Appointment = require('../../models/appointment')

module.exports = {
  index,
  create,
  delete: deleteAppointment,
  update
};

async function index(req, res) {
  const appointment = await Appointment.find({})
  res.json(appointment)

}

async function create(req, res) {
  req.body.user = req.user._id
  const newAppointment = await Appointment.create(req.body);
  return res.json(newAppointment)
}

async function deleteAppointment(req, res) {
  const delAppointment = await Appointment.findByIdAndRemove(req.params.id);
  const appointment = await Appointment.find({})
  return res.json(appointment)
}

async function update(req, res) {
  const updAppointment = await Appointment.findByIdAndUpdate(req.params.id, req.body, {new:true});
  return res.json(updAppointment)
}
