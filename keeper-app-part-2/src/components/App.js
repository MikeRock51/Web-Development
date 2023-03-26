import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import note from "../notes";

console.log(note)

// map through note array and reder each note

function App() {
  return (
    <div>
      <Header />
      {note.map(noteDetail => <Note
        key={noteDetail.key}
        title={noteDetail.title}
        body={noteDetail.content}
      />)}
      <Footer />
    </div>
  );
}

export default App;
