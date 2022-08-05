import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Conversations = () => {
    const [conversations, setConversations] = useState(null)

    useEffect(() => {
        fetch("/api/conversations").then((r) => {
            if (r.ok) {
                r.json().then((data) => {
                    setConversations(data)
                    console.log(data)
                });
            }
        })

    }, []);

    return (
        <div>

            {conversations ? conversations.map(c => {
                return <Link key={c.id} to={`/conversations/${c.id}`}>{c.name}</Link>
            }) : null}

        </div>
    )
}

export default Conversations
