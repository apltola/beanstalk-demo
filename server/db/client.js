const { Pool } = require('pg');

const pool = new Pool();

/* const connectToDb = async () => {
  try {
    await pgClient.connect();
    console.log('🗄 CONNECTED TO POSTGRES');
  } catch (err) {
    console.log('😣 DB CONNECTION FAILED');
  }
}; */

module.exports = {
  pool,
};
