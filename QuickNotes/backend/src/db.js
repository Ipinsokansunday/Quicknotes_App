const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(process.env.DATABASE_URL);

const initDB = () => {
  return new Promise((resolve, reject) => {
    db.serialize(() => {
      db.run(`
        CREATE TABLE IF NOT EXISTS notes (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          title TEXT NOT NULL,
          content TEXT,
          created_at TEXT NOT NULL
        )
      `, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });
  });
};

module.exports = { db, initDB };
