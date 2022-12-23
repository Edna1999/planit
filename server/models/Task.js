const { Schema, model } = require('mongoose');

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

const Task = model('Task', taskSchema);

module.exports = Task;