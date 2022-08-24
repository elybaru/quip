import React, { useState, useEffect } from 'react'

const NewConvoForm = ({ handleNewConvoSubmit, setNewConvoName, newConvoName }) => {


    return (
        <div>
            <form onSubmit={handleNewConvoSubmit}>
                <div>
                    <label>Create a new conversation room</label>
                </div>
                <input type="text" value={newConvoName} placeholder={"Conversation room name..."} onChange={(e) => setNewConvoName(e.target.value)}></input>
                <button type="submit">Create</button>
            </form>

        </div>
    )
}

export default NewConvoForm
