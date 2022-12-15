import React, { useState } from "react";

function CreateArea() {
    const [titleText, setTitleText] = useState("")
    const [contentText, setContentText] =  useState("")

    function handleChange(event) {
        const {name, value} = event.target
        if (name == "title") {
            setTitleText(value)
        } else if (name == "content") {
            setContentText(value)
        }
    }

    return (
        <div>
        <form>
            <input name="title" placeholder="Title" value={titleText} onChange={handleChange}/>
            <textarea name="content" placeholder="Take a note..." rows="3" value={contentText} onChange={handleChange}/>
            <button>Add</button>
        </form>
        </div>
    );
}

export default CreateArea;
