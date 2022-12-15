import React from "react";
import Heading from "./Heading";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

    function addNote(note){
        console.log(note);
    }

    return (
      <div>
        <Heading />
        <CreateArea onAdd={addNote}/>
        <Note key={1} title="Note title" content="Note content" />
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