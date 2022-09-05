import React, {useState, useEffect} from 'react'

const Note = ({individualNote, user, handleUpdateNote, handleDeleteNote}) => {
    const [editNote, setEditNote] = useState(individualNote.content)
    const [isAuthor, setIsAuthor] = useState(false)
    const [toggleEditNoteClicked, setToggleEditNoteClicked] = useState(false)

    const checkIfAuthor = (noteId, userId) => {
        if (parseInt(noteId) === parseInt(userId)) 
            setIsAuthor(true)
    }

    useEffect(() => {
        checkIfAuthor(individualNote.user.id, user.id)
    }, [])

    // console.log("I AM THE USER", user)
    // console.log("I AM THE INDIVIDUAL NOTE", individualNote)


    // console.log(isAuthor)

    const handleEditNoteChange = (event) => {
        setEditNote(event.target.value)
    }

    const handleEditNoteSubmit = (e) => {
        e.preventDefault()
        fetch(`api/notes/${individualNote.id}`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ content: editNote, user_id: user.id })
        })
            .then(r => r.json())
            .then(data => {
                console.log(data)
                handleUpdateNote(data)
                setToggleEditNoteClicked(false)

            })
    }

    const handleDeleteNoteClick = (e) => {
        e.preventDefault()
        fetch(`api/notes/${individualNote.id}`, {
            method: 'DELETE'
        })
            .then(handleDeleteNote(individualNote))
        
    }

    const handleEditNoteClick = (e) => {
        e.preventDefault()
        if (toggleEditNoteClicked === true) {
            setToggleEditNoteClicked(false)
            // console.log(toggleEditNoteClicked)
        }
        else {
            setToggleEditNoteClicked(true)
            // console.log(individualNote)
            // console.log(toggleEditNoteClicked)
            setEditNote(individualNote.content)
        }
    }

    

    const editNoteForm = () => {
        return (
            <form className="main-note-form" onSubmit={handleEditNoteSubmit}>
                <textarea className="note-edit-input" type="text" value={editNote} onChange={handleEditNoteChange} />
                <div className="edit-delete-buttons-container">
                    <div>
                        <input type='submit' value="Update Note" />
                    </div>
                    <div>
                        <button onClick={handleDeleteNoteClick}>Delete Note</button>
                    </div>
                </div>
            </form >

        )
    }

    // DESTROY - Delete note
    // compare if current user, if so display option to delete note
    // destroy action in notes controller
    // update state, filter through array and remove note
    return (
        <div className="note">
            {individualNote ? 
                <div>
                    <div className="note-content">{toggleEditNoteClicked ? editNoteForm() : individualNote.content}</div>
                        <div>
                            <div className="note-footer">
                                <div>{individualNote.user.username}</div>
                                    <div>
                                    {isAuthor ? <button className="button-secondary" onClick={handleEditNoteClick}>Edit</button> : null}
                                    </div>
                            </div>
                        </div>
                    </div>
                 
                 : null}
            
        </div>
    )
}

export default Note
