
// import React,{ useState } from "react"
// import NewNoteForm  from "./components/NewNoteForm"
// import NoteList from "./components/NoteList"

// import './App.css'

// const App = () => {

//     const [notes, setNotes] = useState([]);

//     const addNote = (note) => {
//         console.log(note)
//         setNotes(prevnotes => [...prevnotes,note])
//         console.log(notes)
//     }
//     const handleDelete = (index) => {
//         const updatedNotes = [...notes];
//         updatedNotes.splice(index, 1);
//         setNotes(updatedNotes);
//       };
    

//     return( <div className="App">

//         <h1>Note Taking App</h1>
//         <NewNoteForm addNote={addNote}/>
//         <NoteList notes={notes} handleDelete={handleDelete} />

//     </div>)
   
// }



// export default App

import React, { useState } from 'react';
import './App.css';
import NewNoteForm from './components/NewNoteForm';
import NoteList from './components/NoteList';

function App() {
  const [notes, setNotes] = useState([]);
  const [search, setSearch] = useState("");

  const filteredNotes = notes.filter(note =>
    note.toLowerCase().includes(search.toLowerCase())
  );

  const addNote = (note) => {
    setNotes(prevNotes => [...prevNotes, note]);
  };

  const handleDelete = (index) => {
    const updatedNotes = [...notes];
    updatedNotes.splice(index, 1);
    setNotes(updatedNotes);
  };

  const handleEdit = (index, updatedNote) => {
    console.log(index, updatedNote)
    const updatedNotes = [...notes];
    updatedNotes[index] = updatedNote;
    setNotes(updatedNotes);
  };

  return (
    <div className="App">
      <h1>Note Taking App</h1>
      <NewNoteForm addNote={addNote} />
      <input 
        value={search} 
        onChange={(e) => setSearch(e.target.value)} 
        placeholder="Search for a note..." 
      />
      <NoteList 
        notes={filteredNotes} 
        handleDelete={handleDelete} 
        handleEdit={handleEdit}
      />
    </div>
  );
}

export default App;
