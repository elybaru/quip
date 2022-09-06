import React, { useEffect, useState, useContext } from 'react'
import MessagesWindow from './MessagesWindow'
import ConvoWebSocket from './ConvoWebSocket'
import Message from './Message'
import { UserContext } from './UserContext';

const ConversationRoom = ({ addConvoMessage, cableApp }) => {

	// const [search, setSearch] = useState("")
	const [convoId, setConvoId] = useState("")
	const [convoName, setConvoName] = useState("")
	const [currentConvo, setCurrentConvo] = useState()
	const [convoMessages, setConvoMessages] = useState([])
	const {user, setUser} = useContext(UserContext)


	const conversationId = window.location.href.match(/\d+$/)[0]

	useEffect(() => {
		// console.log("In useEffect")
		// auto-login
		// console.log("I am the conversation ID", conversationId)

		fetch(`/api/conversations/${conversationId}`)
			.then((r) => r.json())
			.then((data) => {
				console.log(`In Conversation Room ${conversationId}`, data)
				setConvoMessages(data.messages)
				setConvoName(data.name)
			});
		// 	setConvoId(conversationId)
		// 	console.log("I AM THE CONVO ID", convoId)

		// Comment #9000, This works, but creates a stale data issue, see with line 46
		// const currentConvo = conversations.find(conversation => conversation.id == conversationId)
		// if (currentConvo.messages) {
		// 	setConvoMessages(currentConvo.messages)
		// }
		// console.log("IN CONVERSATION ROOM", currentConvo)


		// const convo = conversations.find(conversation => conversation.id == conversationId)
		// if (convo.messages) {
		// 	setCurrentConvo(convo.messages)
		// }
		// console.log("IN CONVERSATION ROOM", convo)

	}, []
	)

	// console.log("I AM THE CONVERSATION ID", typeof conversationId)

	// This works with the stale data issue, used with line 27
	// const displayMessages = convoMessages.length > 0 ? convoMessages.map(msg => <li key={msg.id}>{msg.content}</li>) : null

	// const displayMessages = currentConvo.messages > 0 ? currentConvo.map(msg => <li key={msg.id}>{msg.content}</li>) : null




	const tellMe = (data) => {
		// If you get a new message, coming from broadcast, and I have access to conversations, then 
		//
		// if (!convoMessages.find(message => message == data.message)) {
		// if (data.messages) {
		// console.log("Array")
		// console.log("TELL ME IS BEING CALLED", data.messages)
		// setConvoMessages(data.messages)
		// } else {
		// console.log("Object")
		console.log("TELL ME IS BEING CALLED", data.message)
		// console.log("TELL ME IS BEING CALLED with user?", data.username)
		setConvoMessages((convoMessages) => [...convoMessages, data.message])
		// }
	}


	const noMessages = () => {
		return (
			<div>
				<br />
				<p>There are no messages in the conversation yet! Use the form below to send the first message.</p>
				<br />
			</div>
		)
	}



	return (
		<div>
			<div>
				<div>
					<h2 className="convo-name">{convoName ? convoName : null}</h2>
				</div>

				<div className="messages" >
					<div>
						{/* {displayMessages} */}
						{convoMessages.length > 0 ? convoMessages.map(msg => <Message key={msg.id} msg={msg} />) : noMessages()}
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
					// getConversation={getConversation}
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




