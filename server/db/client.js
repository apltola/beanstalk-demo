const { Pool, Client } = require('pg');

const pgClient = new Client();

const connectToDb = async () => {
  try {
    await pgClient.connect();
    console.log('🗄 CONNECTED TO POSTGRES');
  } catch (err) {
    console.log('😣 DB CONNECTION FAILED');
  }
};

module.exports = {
  pgClient,
  connectToDb,
};
