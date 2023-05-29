import React, { useState } from "react";

function CreateArea(props) {
  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <input
          onChange={props.handleChange}
          value={props.note.title}
          name="title"
          placeholder="Title"
        />
        <textarea
          onChange={props.handleChange}
          value={props.note.content}
          name="content"
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={props.addNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
