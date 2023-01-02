const db = require('../config/connection');
const { User, Project, Task } = require('../models');
const userSeeds = require('./userSeeds.json');
const projectSeeds = require('./projectSeed.json');
// const taskSeeds = require('./taskSeed.json');

db.once('open', async () => {
  try {
    await Project.deleteMany({});
    await User.deleteMany({});
    await Task.deleteMany({})

    await User.create(userSeeds);

    // for (let i = 0; i < projectSeeds.length; i++) {
    //   const { _id, users } = await Project.create(projectSeeds[i]);
    //   const user = await User.findOneAndUpdate(
    //     { users: users },
    //     {
    //       $addToSet: {
    //         projects: _id,
    //       },
    //     }
    //   );
    // }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
