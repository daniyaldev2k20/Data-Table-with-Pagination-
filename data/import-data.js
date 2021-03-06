const fs = require("fs");
const mongoose = require("mongoose");
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });
const Nobel = require('../models/Nobel');

(async function () {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log('Import to DB successful');
  } catch (err) {
    throw new Error(err);
  }
})();

const nobelData = JSON.parse(
  fs.readFileSync(`${__dirname}/nobel.json`, "utf-8")
);

//Import data from JSON file into MongoDB Database
const importData = async () => {
  try {
    await Nobel.create(nobelData);
    // console.log('Data successfully loaded!');
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

//3rd index of array because that is where 'import/delete' is specified in below console.log function
if (process.argv[2] === '--import') {
  importData();
} 

module.exports = nobelData;
