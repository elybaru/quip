import React, {useState, useEffect} from 'react'

const Note = ({individualNote, user, handleUpdateNote}) => {
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


    console.log(isAuthor)

    // PATCH - Edit Note
    // compare if current user, if so display option to edit and delete
    // if edit, load into text box, patch on submit to notes controller update method
    // on return update state of notes

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

    const handleEditNoteClick = (e) => {
        e.preventDefault()
        if (toggleEditNoteClicked === true) {
            setToggleEditNoteClicked(false)
            // console.log(toggleEditNoteClicked)
        }
        else {
            setToggleEditNoteClicked(true)
            console.log(individualNote)
            console.log(toggleEditNoteClicked)
            setEditNote(individualNote.content)
        }
    }

    

    const editNoteForm = () => {
        return (
            <form className="main-note-form" onSubmit={handleEditNoteSubmit}>
                <input type="text" value={editNote} onChange={handleEditNoteChange} />
                <input type='submit' value="Update Note" />
                {/* <button className="delete-note-click" onClick={handleDeleteNoteClick}>Delete Note</button> */}
            </form >

        )
    }

    // DESTROY - Delete note
    // compare if current user, if so display option to delete note
    // destroy action in notes controller
    // update state, filter through array and remove note
    return (
        <div>
            {individualNote ? 
                 <div>
                     <div>{toggleEditNoteClicked ? editNoteForm() : individualNote.content}</div>
                     <div>{individualNote.user.username}</div>
                     <div>
                     {isAuthor ? <button className="note-edit-button" onClick={handleEditNoteClick}>Edit</button> : null}
                    </div>
                 </div>
                 
                 : null}
            
        </div>
    )
}

export default Note
