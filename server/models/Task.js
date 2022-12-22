const { Schema } = require('mongoose');
const { User, Project } = require('../models')

const taskSchema = new Schema({
  taskName: {
    type: String,
    required: true
  },
  taskDescription: {
    type: String,
    required: true
  },
  startDate: {
    type: Date
  },
  endDate: {
    type: Date
  },
  users: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
  taskProject: {
    type: Schema.Types.ObjectId,
    ref: 'Project',
  }
});

module.exports = taskSchema;