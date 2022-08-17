import React, {useEffect} from 'react'

const ConvoWebSocket = (props) => {
    useEffect(() => {
        console.log("I AM IN THE USE EFFECT CONVO WEB SOCKET")
        console.log("PROPS", props)
        // props.getRoomData(window.location.href.match(/\d+$/)[0])
		props.getConversation(window.location.href.match(/\d+$/)[0])
		props.cableApp.room = props.cableApp.cable.subscriptions.create(
			{
				channel: "MessagesChannel",
				room: window.location.href.match(/\d+$/)[0],
			},
			{
				received: (message) => {
                    //  console.log("IN RECEIVED", message)
                // debugger
                // props.updateApp(updatedRoom)
                    // props.tellMe(message)
                    props.tellMe()
                // props.setConvoMessages(({...props.convoMessages, message: message}))
                // props.setConvoMessages(([...props.convoMessages, message]))
				},
            }
        )
	}, [])
    return (
        <div>
            
        </div>
    )
}

export default ConvoWebSocket
