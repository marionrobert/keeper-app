import React, { useState } from "react";

function CreateArea(props) {
    const [note, setNote] = useState({
        title: "",
        content: ""
    })
    
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

    return (
        <div>
        <form>
            <input name="title" placeholder="Title" value={note.title} onChange={handleChange}/>
            <textarea name="content" placeholder="Take a note..." rows="3" value={note.content} onChange={handleChange}/>
            <button onClick={submitNote}>Add</button>
        </form>
        </div>
    );
}

export default CreateArea;
