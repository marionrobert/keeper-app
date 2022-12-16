import React, {useState} from "react";
import Heading from "./Heading";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
    // notes array needs state bcs it's going to change
    const [notes, setNotes] = useState([]);

    function addNote(note){
        setNotes((prevNotes) => {
            return [...prevNotes, note]
        })
    }

    function deleteNote(id){
        setNotes((prevNotes) => {
            return prevNotes.filter((noteItem, index) => {
                return index !== id;
            })
        })
    }

    return (
      <div>
        <Heading />
        <CreateArea onAdd={addNote}/>
        { notes.map((note, index) => (
            <Note key={index} id={index} title={note.title} content={note.content} onDelete={deleteNote} />
        )
        )}
        <Footer />
      </div>
    );
}

export default App;

// pass in a function as a prop of CreateArea component --> CreateArea onAdd={addNote}
// --> addNote is going to be added as a value to one of the props(onAdd) for the create area component

// part 2
// import notes from "../notes";
// function App() {
//     return <div>
//         <Heading/>
//         {notes.map( note => <Note key= {note.key} title= {note.title} content = {note.content}/> )}        
//         <Footer/>
//     </div>
// };