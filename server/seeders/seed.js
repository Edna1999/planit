const db = require('../config/connection');
const { User, Project, Task } = require('../models');
// const userSeeds = require('./userSeeds.json');
// const projectSeeds = require('./projectSeed.json');
// const taskSeeds = require('./taskSeed.json');

const { ObjectId } = require('mongodb');

let seedData = [
  {
    project: {
      projectName: 'Final Project Grading',
      projectDescription: "Working with Mike to grade the course's final projects",
      users: []
    },
    users: [
      {
        username: 'eweiss',
        firstName: 'Eric',
        lastName: 'Weiss',
        email: 'eweiss@gmail.com',
        password: 'password01'
      }
    ]
  },
  {
    project: {
      projectName: 'My Other Project',
      projectDescription: "Working with Mike to grade the course's final projects",
      users: []
    },
    users: [
      {
        username: 'mkotte',
        firstName: 'Michael',
        lastName: 'Kotte',
        email: 'mkotte@gmail.com',
        password: 'password02'
      }
    ]
  }
];

seedData = seedData.map(data => ({
  ...data,
  project: {
    ...data.project,
    _id: new ObjectId()
  },
  users: data.users.map(user => ({
    ...user,
    _id: new ObjectId()
  }))
}));

db.once('open', async () => {
  try {
    await Project.deleteMany({});
    await User.deleteMany({});
    await Task.deleteMany({})

    for (const data of seedData) {
      await Project.create(data.project);
      await User.create(data.users);
    }

  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
