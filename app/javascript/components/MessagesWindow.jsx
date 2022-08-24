import React, {useState} from 'react'

const MessagesWindow = ({addConvoMessage, onMessageInput, user}) => {
	const [newMessage, setNewMessage] = useState("")
	const conversationId = window.location.href.match(/\d+$/)[0]

	const handleSubmit = (e) => {
		e.preventDefault()
		
		const message = {
			content: newMessage,
			user_id: user.id,
			conversation_id: parseInt(conversationId),
		}
		console.log("I AM SENDING A NEW MESSAGE", message)
		addConvoMessage(message)
		setNewMessage("")
	}

	const handleChange =(event) => {
		setNewMessage(event.target.value)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
			<textarea
				type="text"
				className="message-input"
				placeholder="Write a new message... "
				value={newMessage}
				onChange={handleChange}
			></textarea>
			<button type="submit">Send</button>


		</form>
            
        </div>
    )
}

export default MessagesWindow