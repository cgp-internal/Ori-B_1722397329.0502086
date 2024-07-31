import React, { useState, useEffect } from 'react';
import { getNotes, saveNotes } from '../utils/storage';

function NoteList() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const storedNotes = getNotes();
    setNotes(storedNotes);
  }, []);

  const handleDelete = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
    saveNotes(updatedNotes);
  };

  return (
    <ul>
      {notes.map((note) => (
        <li key={note.id}>
          <span>{note.title}</span>
          <button onClick={() => handleDelete(note.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export { NoteList };