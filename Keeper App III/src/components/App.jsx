import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [note, setNote] = useState({ title: "", content: "" });
  const [noteList, setNoteList] = useState([]);

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevValues) => {
      return {
        ...prevValues,
        [name]: value
      };
    });
  }

  function addNote() {
    setNoteList((prevList) => {
      return [...prevList, note];
    });
    setNote({ title: "", content: "" });
  }

  function deleteNote(id) {
    setNoteList((prevList) => {
      return prevList.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea
        handleChange={handleChange}
        note={note}
        setNote={setNote}
        noteList={noteList}
        setNoteList={setNoteList}
        addNote={addNote}
      />
      {noteList.map((note, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            deleteNote={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
