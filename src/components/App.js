import React, { useState } from 'react';
import NoteList from './NoteList';
import NoteEditor from './NoteEditor';

function App() {
  const [notes, setNotes] = useState([]);
  const [editing, setEditing] = useState(null);

  const handleAdd = () => {
    setEditing({ id: null, title: '', content: '', done: false });
  };

  const handleEdit = (note) => {
    setEditing(note);
  };

  const handleSave = (newNote) => {
    const updatedNotes = notes.map((note) => (note.id === newNote.id ? newNote : note));
    if (!newNote.id) {
      updatedNotes.push({ ...newNote, id: Math.max(...notes.map((note) => note.id), 0) + 1 });
    }
    setNotes(updatedNotes);
    setEditing(null);
  };

  const handleCancel = () => {
    setEditing(null);
  };

  return (
    <div>
      <h1>Notes</h1>
      <button onClick={handleAdd}>Add Note</button>
      <NoteList notes={notes} onEdit={handleEdit} />
      {editing && <NoteEditor note={editing} onSave={handleSave} onCancel={handleCancel} />}
    </div>
  );
}

export default App;