class MessagesController < ApplicationController

    def index
    end

    def create
        @message = current_user.messages.build(message_params)
        @message.save
        ActionCable.server.broadcast('messages', { messages: Message.all })
    end

    # def create
    #     @message = current_user.messages.build(message_params)
    #     @message.save
    #     ActionCable.server.broadcast('message', @message.as_json(include: :user))
    # end

      private


      def message_params
        params.require(:message).permit(:content, :user_id, :conversation_id)
      end
end
