import React, {useEffect} from 'react'

const ConvoWebSocket = (props) => {
    useEffect(() => {
        console.log("I AM IN THE USE EFFECT CONVO WEB SOCKET")
        console.log("PROPS", props)
        // props.getRoomData(window.location.href.match(/\d+$/)[0])
		// props.getConversation(window.location.href.match(/\d+$/)[0])
        props.getConversation(1)

        // debugger
		props.cableApp.room = props.cableApp.cable.subscriptions.create(
			{
				channel: "MessagesChannel",
				// room: window.location.href.match(/\d+$/)[0],
                room: 1
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
	}, [])


    return (
        <div>
            
        </div>
    )
}

export default ConvoWebSocket