// const { MongoClient } = require('mongodb');
// const MongoDBCrud = require('./utils/mongoCRUD');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });
const app = require('./app');

process.on('uncaughtException', (err) => {
  console.log('UNCAUGHT EXCEPTION! Shutting down...');
  console.log(err.name, err.message);
  process.exit(1); //1 stands for uncaught exception
});

(async function () {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log('Connected to database');
  } catch (err) {
    throw new Error(err);
  }
})();

const port = process.env.PORT || 5000
const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});

process.on('unhandledRejection', (err) => {
  console.log(err.name, err.message);
  console.log('UNHANDLED REJECTION! Shutting down...');
  server.close(() => {
    process.exit(1); //1 stands for uncaught exception
  });
});

process.on('SIGTERM', () => {
  console.log('SIGTERM RECEIVED, shutting down gracefully');
  server.close(() => {
    console.log('Process terminated');
  });
});


// MongoClient.connect(url, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// }).catch(err => {
//     console.error(err.stack)
//     process.exit(1)
// })
// .then( async (client) => {
//     await MongoDBCrud.injectDB(client);
//     app.listen(3000, () => {
//         console.log(`App running on port 3000...`);
//     });
// })



