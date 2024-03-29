import consumer from './consumer'

const MessagesChannel = consumer.subscriptions.create('MessagesChannel', {
  connected() {
    // Called when the subscription is ready for use on the server
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    // console.log("I AM IN THE JS FILE FOR RECEIVED METHOD", data)
    // Called when there's incoming data on the websocket for this channel
  },
})

export default MessagesChannel