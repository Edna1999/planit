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
 taskAssignee: [User],
 taskProject: Project
});

module.exports = taskSchema;