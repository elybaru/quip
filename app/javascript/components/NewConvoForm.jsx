import React, { useState, useEffect } from 'react'

const NewConvoForm = ({ handleNewConvoSubmit, setNewConvoName, newConvoName }) => {


    return (
        <div className="new-convo-form">
            <form onSubmit={handleNewConvoSubmit}>
                <div>
                    <label>Create a new conversation room</label>
                </div>
                <br />
                <div>
                <input type="text" value={newConvoName} className="new-convo-input" placeholder={"Conversation room name..."} onChange={(e) => setNewConvoName(e.target.value)}></input>
                <br />
                </div>
                <br />
                <button className="submit-convo-button" type="submit">Create</button>
            </form>

        </div>
    )
}

export default NewConvoForm
