import React, { useEffect, useState } from 'react'
import MessagesWindow from './MessagesWindow'
import ConvoWebSocket from './ConvoWebSocket'

const ConversationRoom = ({ convoMessages, conversations, addConvoMessage, user, setConvoMessages, tellMe, cableApp, getConversation }) => {

	// const [search, setSearch] = useState("")
	const [convoId, setConvoId] = useState("")
	const [currentConvo, setCurrentConvo] = useState()
 	const conversationId = window.location.href.match(/\d+$/)[0]

	useEffect(() => {
		// console.log("In useEffect")
		// auto-login
		// console.log("I am the conversation ID", conversationId)
		
		// fetch(`/api/conversations/${conversationId}`)
		// 	.then((r) => r.json())
		// 	.then((data) => {
		// 		console.log(`In Conversation Room ${conversationId}` , data)
		// 		setConvoMessages(data.messages)
		// 	});
		// 	setConvoId(conversationId)
		// 	console.log("I AM THE CONVO ID", convoId)
		const currentConvo = conversations.find(conversation => conversation.id == conversationId)
		if (currentConvo.messages) {
			setConvoMessages(currentConvo.messages)
		}
		// console.log("IN CONVERSATION ROOM", currentConvo)
		
		
		// const convo = conversations.find(conversation => conversation.id == conversationId)
		// if (convo.messages) {
		// 	setCurrentConvo(convo.messages)
		// }
		// console.log("IN CONVERSATION ROOM", convo)

	}, []
	)

	// console.log("I AM THE CONVERSATION ID", typeof conversationId)

		const displayMessages = convoMessages.length > 0 ? convoMessages.map(msg => <li key={msg.id}>{msg.content}</li>) : null

		// const displayMessages = currentConvo.messages > 0 ? currentConvo.map(msg => <li key={msg.id}>{msg.content}</li>) : null


	



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
				<ConvoWebSocket 
				conversationId={conversationId}
				cableApp={cableApp}
				// updateApp={updateApp}
				getConversation={getConversation}
				conversationId={conversationId}
                setConvoMessages={setConvoMessages}
                convoMessages={convoMessages}
                tellMe={tellMe}
			/> 
			</div>

		</div>
	)
}

export default ConversationRoom




