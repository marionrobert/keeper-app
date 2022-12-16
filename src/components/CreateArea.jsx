import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
    const [note, setNote] = useState({
        title: "",
        content: ""
    })

    const [isExpanded, setExpanded] = useState(false);
    
    function handleChange(event) {
        const {name, value} = event.target

        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            };
        });
    }

    // when the button is clicked, we passed it a function that should be triggered
    function submitNote(event){
        // calling this onAdd from the props is going o be equivalent to calling the addNote function from the App.jsx
        // + pass over the current note which is needed by the addNote function
        props.onAdd(note);
        setNote({
            title: "",
            content: ""
        });
        event.preventDefault();
    }

    function handleClick(){
        setExpanded(true);
    }

    return (
        <div>
            <form className="create-note">
                { isExpanded ? <input name="title" placeholder="Title" value={note.title} onChange={handleChange}/> : null }
                
                <textarea name="content" placeholder="Take a note..." rows={isExpanded? 3 : 1} value={note.content} onChange={handleChange} onClick={handleClick}/>
                <Zoom in={isExpanded}>
                    <Fab onClick={submitNote}>
                        <AddIcon/>
                    </Fab>
                </Zoom>
            </form>
        </div>
    );
}

export default CreateArea;
