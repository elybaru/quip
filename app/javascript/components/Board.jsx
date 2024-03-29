import React, {useEffect, useState} from 'react'
import Note from './Note'
import NoteForm from './NoteForm'

const Board = () => {
    const [notes, setNotes] = useState([])

    useEffect(() => {
        fetch("/api/boards").then((r) => {
            if (r.ok) {
                r.json().then((data) => {
                    setNotes(data)
                    console.log("fetched in board use effect", data)
                });
            }
        })

    }, []);

    const handleUpdateNote = (note) => {
        setNotes(notes.map(n => n.id == note.id ? note : n))
    }

    const handleDeleteNote = (note) => {
        setNotes(notes.filter(n => {return n.id !== note.id}))
    }

    return (
        <div>
            <h2 className="quipboard-title">Quip Board</h2>

        <div>
            { notes ? notes.map(individualNote => <Note key={individualNote.id} individualNote={individualNote} handleUpdateNote={handleUpdateNote} handleDeleteNote={handleDeleteNote}/>) :  null}
        </div>

        <div className="new-note-div">
            <NoteForm setNotes={setNotes} notes={notes}/>
        </div>
            
        </div>
    )
}

export default Board
