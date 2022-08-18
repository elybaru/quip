class Api::MessagesController < ApplicationController
  skip_before_action :verify_authenticity_token

    def index
      # binding.pry
      # ActionCable.server.broadcast('messages', { messages: Message.all})
      # render json: Message.all
    end

    def create 
      @message = current_user.messages.build(message_params)
      # @message = Message.new(message_params)
  
      if @message.save
        ActionCable.server.broadcast('messages', {message: @message.serializable_hash(include: :user) } )
      end
    end

    # def create
    #     @message = current_user.messages.build(message_params)
    #     @message.save
    #     ActionCable.server.broadcast('messages', { messages: Message.all })
    # end

    # def create
    #     @message = current_user.messages.build(message_params)
    #     @message.save
    #     ActionCable.server.broadcast('message', @message.as_json(include: :user))
    # end

      private


      def message_params
        params.require(:message).permit(:content, :user_id, :conversation_id)
      end

      def broadcast(message)
        MessagesChannel.broadcast_to(message.conversation, {
          message: message
          # conversation: conversation,
          # users: conversation.users,
          # messages: conversation.messages
        })
      end
end


