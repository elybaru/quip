import React from 'react'

const Message = ({msg, user}) => {
    console.log(msg)

    const timestamp = new Date(msg.created_at).toLocaleTimeString()

    const whichUser = () => {
		if (msg.user.id === parseInt(user.id)) {
			return "current-user-message"
		} else {
			return "other-user-message"
		}
	}

    return (
        <div id="conv-message" className={whichUser()}>
            <div className="message-content">
            {msg.content}
            </div>
            <div className="timestamp">
                {timestamp}
            </div>
            <div className="message-username">
                {msg.user.username}
            </div>
        </div>
    )
}

export default Message
