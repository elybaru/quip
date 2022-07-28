class MessagesChannel < ApplicationCable::Channel
    def subscribed
    #   stream_from 'messages'
  
    #   ActionCable.server.broadcast('messages', { messages: Message.all })
    stop_all_streams
    conversation = Conversation.find(params[:room])
    stream_for conversation
    end

    
    def received(data)
        MessagesChannel.broadcast_to(conversation, { conversation: conversation, users: conversation.users, messages: conversation.messages})
    end
  
    def unsubscribed
        stop_all_streams
    end
  end