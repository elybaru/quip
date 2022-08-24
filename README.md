# README

Did you mean?  javascript_cdata_section):
    1: <%= javascript_packs_with_chunks_tag 'messages' %>

# Notes


const tellMe = (data) => {
        // If you get a new message, coming from broadcast, and I have access to conversations, then 
        //

        // const newConversations = conversations.map(c => c.id == data.conversation_id ? {...c, messages: [...c.messages, data.message]}     : c)
        // setConversations(newConversations)



        if (!convoMessages.find(message => message == data.message)) {
        //     // console.log("Array")
        //     // console.log("TELL ME IS BEING CALLED", data.messages)
        //     // setConvoMessages(data.messages)
        // // } else {
        //     // console.log("Object")
        //     console.log("TELL ME IS BEING CALLED", data.message)
        //     // console.log("TELL ME IS BEING CALLED with user?", data.username)
            setConvoMessages((convoMessages) => [...convoMessages, data.message])
        }
    }





# ConvoRoom
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
		// const currentConvo = conversations.find(conversation => conversation.id == conversationId)
		// if (currentConvo.messages) {
		// 	setConvoMessages(currentConvo.messages)
		// }
		// console.log("IN CONVERSATION ROOM", currentConvo)

		const convo = conversations.find(conversation => conversation.id == conversationId)
		if (convo.messages) {
			setCurrentConvo(convo.messages)
		}
		console.log("IN CONVERSATION ROOM", convo)

	}, [conversationId]
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






User - create and read
Messages - create and read
Conversations - create and read
- ability for user to add a conversation room

Notes - full crud
user has_many notes

- User data with messages for convo and new messages
- Ability to create new conversation rooms
- 






# Hitting the MVP
ROUTES
- Landing page /homes (already done)
- List of chat rooms /chatrooms/1
- User can add a new chatroom
    - try to create two chatrooms behind routes
- Memberships: chatroom that you join / leave
- CRUD for messages
- Display error for user creation/ login problems 
    - cannot be blank for username and message
- User in useContext global state
- Deploy



# Features
- Include username with message
- Global store with useContext
- Edit message
- Delete message
- Create multiple chat rooms, ability to join and leave
- Ability to create chat rooms

<!-- <BrowserRouter>
        {/* <Index /> */}
        {/* <Routes> */}
            {/* <Route path='/login' element={<Login />}>
            </Route>
            <Route path='/signup' element={<Signup />}>
            </Route>
            <Route path='/home' element={<Home />}>
            </Route> */}
            {/* <Route path='/' element={<Index />}>
            </Route>  */}
            {/* <Route path="*" element={<Navigate to="/" />} /> */}
     {/* </Routes> */}
    </BrowserRouter>, -->

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
