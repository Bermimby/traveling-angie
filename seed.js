require('dotenv').config();
require('./config/database');

const Appointment = require('./models/appointment');

(async function() {
  await Appointment.deleteMany({});
  const appointments = await Appointment.create([
    {date: new Date('2023-03-15'), appointmentTime: '10:00 AM', location: '123 Main St'},
    {date: new Date('2023-03-16'), appointmentTime: '2:30 PM', location: '456 Elm St'},
    {date: new Date('2023-03-18'), appointmentTime: '1:00 PM', location: '789 Oak St'}
  ]);

  console.log(appointments);

  process.exit();
})();
