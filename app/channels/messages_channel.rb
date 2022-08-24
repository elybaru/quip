class MessagesChannel < ApplicationCable::Channel
    def subscribed
        stream_from 'messages'

        # @messages = Message.all.map do |msg|
        #    u = User.find_by(msg.user_id)
        #    m = {...msg}
        #    m.merge!(username: u.username)
        # end
        stop_all_streams
        # @conversation = Conversation.find(params[:room])
        # ActionCable.server.broadcast('messages', { messages: @conversation.messages })
        # ActionCable.server.broadcast('messages', { messages: Message.all })
        # 
        
        # stream_for @conversation.name
    end


    def received(data)
        console.log(data, "MESSAGES_CHANNEL.RB")
        @conversation = Conversation.find(params[:room])
        # MessagesChannel.broadcast_to(@conversation, { conversation: @conversation, users: @conversation.users, messages: @conversation.messages, message: @message})
        # MessagesChannel.broadcast_to(@conversation, { message: @message})
    end
  
    def unsubscribed
        stop_all_streams
    end
  end