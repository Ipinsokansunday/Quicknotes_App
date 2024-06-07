const { db } = require('../db');

const getAllNotes = () => {
  return new Promise((resolve, reject) => {
    db.all(`SELECT * FROM notes ORDER BY created_at DESC`, (err, rows) => {
      if (err) reject(err);
      else resolve(rows);
    });
  });
};

const createNote = (title, content) => {
  return new Promise((resolve, reject) => {
    const createdAt = new Date().toISOString();
    db.run(`INSERT INTO notes (title, content, created_at) VALUES (?, ?, ?)`, [title, content, createdAt], function(err) {
      if (err) reject(err);
      else resolve({ id: this.lastID, title, content, created_at: createdAt });
    });
  });
};

const updateNote = (id, title, content) => {
  return new Promise((resolve, reject) => {
    db.run(`UPDATE notes SET title = ?, content = ? WHERE id = ?`, [title, content, id], function(err) {
      if (err) reject(err);
      else resolve(this.changes);
    });
  });
};

const deleteNote = (id) => {
  return new Promise((resolve, reject) => {
    db.run(`DELETE FROM notes WHERE id = ?`, [id], function(err) {
      if (err) reject(err);
      else resolve(this.changes);
    });
  });
};

module.exports = { getAllNotes, createNote, updateNote, deleteNote };
