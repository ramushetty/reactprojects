// import React from 'react';

// function NoteItem({ note, deleteNote }) {
//   return (
//     <div className="note-item">
//       {note}
//       <button onClick={deleteNote}>Delete</button>
//     </div>
//   );
// }

// export default NoteItem;


import React, { useState } from 'react';

function NoteItem({ note, deleteNote, handleEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedNote, setEditedNote] = useState(note);

  const saveEdit = () => {
    handleEdit(editedNote);
    setIsEditing(false);
  };

  return (
    <div className="note-item">
      {isEditing ? (
        <div>
          <input 
            value={editedNote} 
            onChange={(e) => setEditedNote(e.target.value)} 
          />
          <button onClick={saveEdit}>Save</button>
        </div>
      ) : (
        <>
          {note}
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={deleteNote}>Delete</button>
        </>
      )}
    </div>
  );
}

export default NoteItem;
