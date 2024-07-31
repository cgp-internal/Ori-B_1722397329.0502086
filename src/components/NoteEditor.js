import React, { useState } from 'react';
import { validateNote } from '../utils/validation';

const NoteEditor = ({ onSave, onCancel, note = {} }) => {
  const [title, setTitle] = useState(note.title || '');
  const [content, setContent] = useState(note.content || '');
  const [done, setDone] = useState(note.done || false);
  const [error, setError] = useState(null);

  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleContentChange = (e) => setContent(e.target.value);
  const handleDoneChange = (e) => setDone(e.target.checked);

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      const newNote = { title, content, done };
      validateNote(newNote);
      onSave(newNote);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleCancel = () => onCancel();

  return (
    <div>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" value={title} onChange={handleTitleChange} />
        </label>
        <br />
        <label>
          Content:
          <textarea value={content} onChange={handleContentChange} />
        </label>
        <br />
        <label>
          Done:
          <input type="checkbox" checked={done} onChange={handleDoneChange} />
        </label>
        <br />
        <button type="submit">Save</button>
        <button type="button" onClick={handleCancel}>Cancel</button>
      </form>
    </div>
  );
};

export default NoteEditor;