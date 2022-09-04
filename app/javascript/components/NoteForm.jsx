import React, {useState} from 'react'

const NoteForm = ({user, setNotes, notes}) => {
    const [newNote, setNewNote] = useState("")

    const handleChange =(event) => {
		setNewNote(event.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const noteObj = {
            content: newNote,
            user_id: user.id
        }
        
        fetch("/api/notes", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"Accept": "application/json",
			},
			body: JSON.stringify(noteObj),
        })
        .then(resp => resp.json())
        .then(data => {
            const newNoteObj = {
                content: data.content,
                id: data.id,
                user: {username: data.user.username,
                id: data.user.id}
            }
            setNotes((notes) => [...notes, newNoteObj])
            console.log(data)
		    setNewNote("")

        })
		
        // console.log("I AM SENDING A NEW MESSAGE", newNote)
        
	}

    return (
        <div className="new-note-div">

            <form className="new-note-form" onSubmit={handleSubmit}>
			<textarea
				type="text"
				className="note-input"
                placeholder="Write a new note... "
				value={newNote}
				onChange={handleChange}
			></textarea>
			<button type="submit">Post</button>
       


		</form>
            
        </div>
    )
}

export default NoteForm
