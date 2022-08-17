class MessagesChannel < ApplicationCable::Channel
    def subscribed
    #   stream_from 'messages'
  
    #   ActionCable.server.broadcast('messages', { messages: Message.all })
    stop_all_streams
    @conversation = Conversation.find(params[:room])
    stream_for @conversation.name
    end


    def received(data)
        console.log(data, "MESSAGES_CHANNEL.RB")
        MessagesChannel.broadcast_to(@conversation, { conversation: @conversation, users: @conversation.users, messages: @conversation.messages})
    end
  
    def unsubscribed
        stop_all_streams
    end
  end