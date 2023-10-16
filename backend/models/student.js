const mongoose = require('mongoose');

const studentSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  note: { type: Number, required: true },
});

module.exports = mongoose.model('Students', studentSchema);