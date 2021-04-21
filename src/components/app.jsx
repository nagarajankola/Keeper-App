import React from "react";
import Header from "./header"
import Note from "./note"
import Footer from "./footer"
import notes from "../notes"


function createNotes(noteItem){
        return(
        <Note 
                title = {noteItem.title}
                content = {noteItem.content}
            />
        );
}

function App(){
    return (
        <div>
            <Header />
            {notes.map(createNotes)}
            <Footer /> 
        </div>
    );
}

export default App;