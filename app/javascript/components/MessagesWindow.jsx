import React from 'react'

const MessagesWindow = ({submitMessage, newMessage, onMessageInput}) => {
    return (
        <div>
            <form onSubmit={submitMessage}>
			<textarea
				type="text"
				className="message-input"
				placeholder="Write a new message... "
				value={newMessage}
				onChange={onMessageInput}
			></textarea>
			<button type="submit">Send</button>
		</form>
            
        </div>
    )
}

export default MessagesWindow
