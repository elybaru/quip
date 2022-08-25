import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import NewConvoForm from './NewConvoForm'

const Conversations = () => {
    const [conversations, setConversations] = useState(null)
    const [newConvoName, setNewConvoName] = useState("")

    useEffect(() => {
        fetch("/api/conversations").then((r) => {
            if (r.ok) {
                r.json().then((data) => {
                    setConversations(data)
                    console.log("fetched in conversations use effect", data)
                });
            }
        })

    }, []);

    const handleNewConvoSubmit = (e) => {
        e.preventDefault()
        console.log(newConvoName)
        
        fetch('/api/conversations', {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"Accept": "application/json",
			},
			body: JSON.stringify({name: newConvoName}),
        })
        .then(resp => resp.json())
        .then(data => {
            setConversations(data)
            setNewConvoName("")
        })
    }

    return (
        <div>

            {conversations ? conversations.map(c => {
                return <Link key={c.id} to={`/conversations/${c.id}`}>{c.name}</Link>
            }) : null}

            <NewConvoForm handleNewConvoSubmit={handleNewConvoSubmit} setNewConvoName={setNewConvoName} newConvoName={newConvoName} />

        </div>
    )
}

export default Conversations