class Api::MessagesController < ApplicationController
  skip_before_action :verify_authenticity_token

    def index
    end

    def create 
      message = Message.new(message_params)
      if message.save 
        conversation = message.conversation
        broadcast conversation
      end
      render json: message
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

      def broadcast(conversation)
        MessagesChannel.broadcast_to(conversation, {
          conversation: conversation,
          users: conversation.users,
          messages: conversation.messages
        })
      end
end
