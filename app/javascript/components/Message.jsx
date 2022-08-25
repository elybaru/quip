import React from 'react'

const Message = ({msg, user}) => {
    console.log(msg)

    const whichUser = () => {
		if (msg.user.id === parseInt(user.id)) {
			return "current-user-message"
		} else {
			return "other-user-message"
		}
	}

    return (
        <div id="conv-message" className={whichUser()}>
            {msg.content}
            <div>
                {msg.user.username}
            </div>
        </div>
    )
}

export default Message
