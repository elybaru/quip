import React, {useEffect, useState} from 'react'
import ConversationFeed from './ConversationFeed'
import MessagesWindow from './MessagesWindow'
import ConvoWebSocket from './ConvoWebSocket';

const ConversationRoom = ({cableApp, updateApp, messages, handleMessageUpdate, roomData, getRoomData, user, users }) => {
    
    const [newMessage, setNewMessage] = useState("")
	const [getData, setGetData] = useState(null)
	const [search, setSearch] = useState("")
    const conversationId = window.location.href.match(/\d+$/)[0]
    
    

    useEffect(() => {
        // console.log("I AM IN THE USEEFFECT")
        // console.log(conversationId)
		fetch(`/api/conversations/${conversationId}`)
			.then((resp) => 
                resp.json())
			.then((res) => {
                console.log(res)
				// setGetData(res.data.attributes.users.data)
				// handleMessageUpdate(res.data.attributes.messages)
			})
    }, [])
    
    const submitMessage = (e) => {
		e.preventDefault()
		
		fetch("/api/messages", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"Accept": "application/json",
			},
			body: JSON.stringify(message),
		})
			.then((resp) => resp.json())
			.then(() => {
				setNewMessage("")
			})
    }
    
    const handleMessageInput =(event) => {
		setNewMessage(event.target.value)
    }
    
    const message = {
		content: newMessage,
		user_id: user.id,
		conversation_id: conversationId,
	}
    
    const whichUser = (message) => {
		const user = roomData.users.find((x) => parseInt(x.id) === message.user_id)
		return user
    }
    
    const displayMessages = (messages) => {
		return messages.map((msg) => {
			const thisUser = whichUser(msg)
			return msg.content !== null ? (
				<ConversationFeed
					key={msg.id}
					room={roomData}
					user={user}
					// thisUser={thisUser}
					allUsers={users}
					message={msg}
				/>
			) : (
				<div></div>
			)
		})
    }
    
    const handleUpdateMessage = (updatedMessageObj) => {
		const updatedMessages = messages.map((message) => {
			if (message.id === updatedMessageObj.id) {
				return updatedMessageObj
			} else {
				return message
			}
		})
		handleMessageUpdate(updatedMessages)
	}
    
    
    return (
        <div>
            <div>
			
			<div className="messages" >
				<div>
					{messages !== null && messages.length > 0 ? (
						displayMessages(messages)
					) : (
						<h3>
							This room has no message yet
						</h3>
					)}
				</div>
	
				<MessagesWindow
					submitMessage={submitMessage}
					newMessage={newMessage}
					onMessageInput={handleMessageInput}
				/>
			</div>
			<ConvoWebSocket 
				cableApp={cableApp}
				updateApp={updateApp}
				getRoomData={getRoomData}
			/> 
		</div>
            
        </div>
    )
}

export default ConversationRoom
