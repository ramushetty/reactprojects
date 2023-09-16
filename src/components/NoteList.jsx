import React, { useState } from 'react';
import NoteItem from './NoteItem';

function NoteList({ notes, handleDelete, handleEdit }) {

    const [updatedNote, setEditedNote] = useState("")

    const handleEditNoteList = (index,e) => {
        console.log(index,e.target.value)
        handleEdit(index,updatedNote)
        

    }
  return (

    

    <div className="note-list">
      {notes.map((note, index) => (
        <NoteItem 
          key={index} 
          note={note} 
          deleteNote={() => handleDelete(index)}
          handleEdit={(e) => handleEditNoteList(index,e)}
        />
      ))}
    </div>
  );
}

export default NoteList;
