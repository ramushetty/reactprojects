import React, { useState } from 'react';

function NewNoteForm({ addNote }) {
  const [note, setNote] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!note.trim()) {
      alert("Note can't be empty!");
      return;
    }
    addNote(note);
    setNote('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        value={note} 
        onChange={(e) => setNote(e.target.value)} 
        placeholder="Enter your note" 
      />
      <button type="submit">Add Note</button>
    </form>
  );
}

export default NewNoteForm;
