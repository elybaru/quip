import React, {useEffect} from 'react'

const ConvoWebSocket = (props) => {
    useEffect(() => {
        // console.log("I AM IN THE USE EFFECT CONVO WEB SOCKET")
        // console.log("PROPS", props)
        const conversationId = window.location.href.match(/\d+$/)[0]
        // console.log("I am the conversation ID", conversationId)
        // props.getRoomData(window.location.href.match(/\d+$/)[0])
		// props.getConversation(window.location.href.match(/\d+$/)[0])
        // props.getConversation(conversationId)

        // debugger
		props.cableApp.room = props.cableApp.cable.subscriptions.create(
			{
				channel: "MessagesChannel",
				// room: window.location.href.match(/\d+$/)[0],
                room: conversationId
			},
			{
				received: (data) => {
                    console.log("In convosocket", data)
                    props.tellMe(data)
                // props.setConvoMessages(({...props.convoMessages, message: message}))
                // props.setConvoMessages(([...props.convoMessages, message]))
				},
            }
        )
	}, [props.conversationId])


    return (
        <div>
            
        </div>
    )
}

export default ConvoWebSocket