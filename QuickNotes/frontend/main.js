document.addEventListener('DOMContentLoaded', () => {
  const notesContainer = document.getElementById('notes');
  const titleInput = document.getElementById('title');
  const contentInput = document.getElementById('content');
  const addNoteButton = document.getElementById('add-note');

  const fetchNotes = async () => {
    const response = await fetch('http://localhost:3000/api/notes');
    const notes = await response.json();
    notesContainer.innerHTML = notes.map(note => `
      <div class="note">
        <div class="title">${note.title}</div>
        <div class="content">${note.content}</div>
        <button onclick="deleteNote(${note.id})">Delete</button>
      </div>
    `).join('');
  };

  const addNote = async () => {
    const title = titleInput.value;
    const content = contentInput.value;
    await fetch('http://localhost:4000/api/notes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ title, content })
    });
    titleInput.value = '';
    contentInput.value = '';
    fetchNotes();
  };

  window.deleteNote = async (id) => {
    await fetch(`http://localhost:4000/api/notes/${id}`, {
      method: 'DELETE'
    });
    fetchNotes();
  };

  addNoteButton.addEventListener('click', addNote);
  fetchNotes();
});
