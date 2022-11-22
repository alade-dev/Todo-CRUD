const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  title: {
    type: 'string',
    required: true,
  },
  description: {
    type: 'string',
    description: true,
  },
  timestamp: {
    type: 'string',
    default: new Date().toLocaleString(),
  },
});

module.exports = mongoose.model('Todo', todoSchema);
