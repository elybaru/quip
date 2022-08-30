import React, {useEffect, useState} from 'react'
import Note from './Note'
import NoteForm from './NoteForm'

const Board = ({user}) => {
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

    return (
        <div>

            I am the board!

        <div>
            { notes ? notes.map(individualNote => <Note key={individualNote.id} individualNote={individualNote} user={user} handleUpdateNote={handleUpdateNote}/>) :  null}
        </div>

        <div>
            <NoteForm user={user} setNotes={setNotes} notes={notes}/>
        </div>
            
        </div>
    )
}

export default Board
