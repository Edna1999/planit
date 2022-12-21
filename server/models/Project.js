const { Schema } = require('mongoose');
const { Tasks, User } = require('../models')

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedBooks` array in User.js
const projectSchema = new Schema({
  projectId: {
    type: String,
    require: true
  },
  projectName: {
    type: String,
    required: true
  },
  projectDescription: {
    type: String,
    required: true
  },
  startDate: {
    type: Date
  },
  endDate: {
    type: Date
  },
  tasks: [Tasks],
  projectTeam: [User]
});

module.exports = projectSchema;