import React, {useEffect, useState} from 'react'
import ConversationFeed from './ConversationFeed'
import MessagesWindow from './MessagesWindow'
import ConvoWebSocket from './ConvoWebSocket';

const ConversationRoom = ({cableApp, updateApp, handleMessageUpdate, currentConvo, getConversation, user, users }) => {
    
    const [newMessage, setNewMessage] = useState("")
    // const [getData, setGetData] = useState(null)
    const [convoMessages, setConvoMessages] = useState([])
    const [search, setSearch] = useState("")
    const conversationId = window.location.href.match(/\d+$/)[0]
    
    // need to fetch just the whole conversation and map to conversation feed
    // when a new message is sent, update the message with just the new message
    // There shouldn't be multiple subscriptions for the same user


    useEffect(() => {
        // console.log("I AM IN THE USEEFFECT")
        // console.log(conversationId)
        // initial fetch for existing conversation and messages
		fetch(`/api/conversations/${conversationId}`)
			.then((resp) => 
                resp.json())
			.then((response) => {
                // console.log(response)
                // setGetData(response)
                setConvoMessages(response.messages)
				// handleMessageUpdate(response.messages)
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
			.then((resp) => {
				console.log("I AM FROM THE RESPONSE IN THE POST REQUEST")
				resp.json()})
			.then((response) => {
                setNewMessage("")
                // console.log(response)
                // state needs to be updated from broadcast not from post
                // setConvoMessages([...convoMessages, response])
			})
    }
    
    const handleMessageInput =(event) => {
		setNewMessage(event.target.value)
    }

    const tellMe = () => {
		console.log("TELL ME IS BEING CALLED")
        // console.log(input.data.attribute)
    }
    
    const message = {
		content: newMessage,
		user_id: user.id,
		conversation_id: conversationId,
	}
    
    // const whichUser = (message) => {
	// 	const user = currentConvo.users.find((x) => parseInt(x.id) === message.user_id)
	// 	return user
    // }
    
    const displayMessages = (convoMessages) => {
		return convoMessages.map((msg) => {
			// const thisUser = whichUser(msg)
			return msg.content !== null ? (
				<ConversationFeed
					key={msg.id}
					currentConvo={currentConvo}
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
    
    // const handleUpdateMessage = (updatedMessageObj) => {
	// 	const updatedMessages = messages.map((message) => {
	// 		if (message.id === updatedMessageObj.id) {
	// 			return updatedMessageObj
	// 		} else {
	// 			return message
	// 		}
	// 	})
	// 	handleMessageUpdate(updatedMessages)
	// }
    
    
    return (
        <div>
            <div>
			
			<div className="messages" >
				<div>
					{convoMessages !== null && convoMessages.length > 0 ? (
						displayMessages(convoMessages)
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
                getConversation={getConversation}
                setConvoMessages={setConvoMessages}
                convoMessages={convoMessages}
                tellMe={tellMe}
			/> 
		</div>
            
        </div>
    )
}

export default ConversationRoom
