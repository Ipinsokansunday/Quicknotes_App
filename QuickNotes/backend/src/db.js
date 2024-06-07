const path = require('path');
const sqlite3 = require('sqlite3').verbose();
const dbPath = process.env.DB_FILE || './src/notes.db';


// Initialize database function
function initDB() {
  return new Promise((resolve, reject) => {
    const db = new sqlite3.Database(':memory:', (err) => {
      if (err) {
        reject(err);
      } else {
        console.log('Database initialized.');
        resolve(db);
      }
    });
  });
}

module.exports = { initDB };

