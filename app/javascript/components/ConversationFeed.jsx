import React from 'react'

const ConversationFeed = ({user, room, allUsers, message, thisUser}) => {

    const timestamp = new Date(message.created_at).toLocaleTimeString()

	const whichUser = () => {
		if (message.user_id === parseInt(user.id)) {
			return "current-user-message"
		} else {
			return "other-user-message"
		}
	}
    return (
        <div>
            <div id="convo-message" className={whichUser()}>

			{/* <p>{user.username}</p> */}
		
			<p>{message.content}</p>
            {/* <p>{message.user.username}</p> */}
			<p>{timestamp}</p>
			
		</div>
            
        </div>
    )
}

export default ConversationFeed
