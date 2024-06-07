const noteModel = require('../models/noteModel');

const getNotes = async (req, res) => {
  try {
    const notes = await noteModel.getAllNotes();
    res.json(notes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const createNote = async (req, res) => {
  const { title, content } = req.body;
  try {
    const note = await noteModel.createNote(title, content);
    res.status(201).json(note);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateNote = async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  try {
    const changes = await noteModel.updateNote(id, title, content);
    if (changes === 0) return res.status(404).json({ error: 'Note not found' });
    res.json({ message: 'Note updated' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deleteNote = async (req, res) => {
  const { id } = req.params;
  try {
    const changes = await noteModel.deleteNote(id);
    if (changes === 0) return res.status(404).json({ error: 'Note not found' });
    res.json({ message: 'Note deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { getNotes, createNote, updateNote, deleteNote };
