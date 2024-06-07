# QuickNotes

QuickNotes is a simple note-taking application built with Express.js, SQLite, and vanilla HTML/CSS/JavaScript.

## Features
- Create, view, update, and delete notes.
- Sync notes with Google Keep (Not implemented in this version).

## Setup

### Backend

1. Navigate to the `backend` directory.
2. Install dependencies:
   ```bash
   npm install
QuickNotes/
├── backend/
│   ├── node_modules/
│   ├── src/
│   │   ├── controllers/
│   │   │   ├── noteController.js
│   │   ├── models/
│   │   │   ├── noteModel.js
│   │   ├── routes/
│   │   │   ├── noteRoutes.js
│   │   ├── app.js
│   │   ├── db.js
│   ├── package.json
│   ├── package-lock.json
├── frontend/
│   ├── index.html
│   ├── main.css
│   ├── main.js
├── README.md
├── .gitignore
└── .env

