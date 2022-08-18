import React, {useEffect, useState} from 'react'
import MessagesWindow from './MessagesWindow'

const ConversationRoom = ({convoMessages, addConvoMessage, user}) => {
    
    // const [search, setSearch] = useState("")
    // const conversationId = window.location.href.match(/\d+$/)[0]

    const displayMessages = convoMessages.map(msg => <li key={msg.id}>{msg.content}</li>)
    

    return (
        <div>
            <div>
			
			<div className="messages" >
				<div>
					{displayMessages}
				</div>
	
				<MessagesWindow
					addConvoMessage={addConvoMessage}
					user={user}
				/>
			</div>
		</div>
            
        </div>
    )
}

export default ConversationRoom




