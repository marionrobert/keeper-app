import React from "react";
import Heading from "./Heading";
import Footer from "./Footer";
import Note from "./Note";

import CreateArea from "./CreateArea";

function App() {
    return (
      <div>
        <Heading />
        <CreateArea />
        <Note key={1} title="Note title" content="Note content" />
        <Footer />
      </div>
    );
}

export default App;


// part 2
// import notes from "../notes";
// function App() {
//     return <div>
//         <Heading/>
//         {notes.map( note => <Note key= {note.key} title= {note.title} content = {note.content}/> )}        
//         <Footer/>
//     </div>
// };