const db = require('../config/connection');
const { User, Project, Task } = require('../models');
const userSeeds = require('./userSeeds.json');
const projectSeeds = require('./projectSeed.json');
const taskSeeds = require('./taskSeed.json');

db.once('open', async () => {
  try {
    // clean database
    await Project.deleteMany({});
    await User.deleteMany({});
    await Task.deleteMany({})

    // bulk create each model
    const users = await User.insertMany(userSeeds);
    const projects = await Project.insertMany(projectSeeds);
    const tasks = await Task.insertMany(taskSeeds);

    for (newProject of projects) {
      const tempUser = users[Math.floor(Math.random() * users.length)];
      const tempTask = tasks[Math.floor(Math.random() * tasks.length)];
      newProject.tasks.push(tempTask._id);
      newProject.users.push(tempUser._id);
      await newProject.save();

      tempUser.projects.push(newProject._id);
      await tempUser.save();

    }

  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});