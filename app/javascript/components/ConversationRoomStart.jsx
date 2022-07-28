import React, {useEffect, useState} from 'react'
import { createConsumer } from "@rails/actioncable"

const ConversationRoomStart = () => {
  const [message, setMessage] = useState("")

    useEffect(() => {
        function createSocket() {
          const consumer = createConsumer('ws://localhost:3000/cable')
          const subscription = consumer.subscriptions.create(
            { 
              channel: 'ChatChannel',
              // room: conversation.name
            }
            
          )
        }
        
          createSocket()
        
    },[])

    const handleChange = e => {
        setMessage(e.target.value)
    }

    console.log(message)

    // store subscription in state
    // when you submit a message calls a send method on the subscription
    // there's a receive method that will receive that message - and that is where you would broadcast the message to the channel

    // there's a received method on front end that would receive message, to append that message to current chat room


    return (
        <div>

          <form>
                <input type="text" name="message" placeholder="Type your message here" onChange={handleChange} value={message}/>
                <input type="submit" value="Send"/>
            </form>
            
        </div>
    )
}

export default ConversationRoomStart
