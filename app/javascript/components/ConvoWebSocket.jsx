import React, {useEffect} from 'react'

const ConvoWebSocket = (props) => {
    useEffect(() => {
        // props.getRoomData(window.location.href.match(/\d+$/)[0])
		props.getRoomData(window.location.href.match(/\d+$/)[0])
		props.cableApp.room = props.cableApp.cable.subscriptions.create(
			{
				channel: "MessagesChannel",
				room: window.location.href.match(/\d+$/)[0],
			},
			{
				received: (updatedRoom) => {
				props.updateApp(updatedRoom)
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
