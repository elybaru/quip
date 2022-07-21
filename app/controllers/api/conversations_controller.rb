class Api::ConversationsController < ApplicationController
    before_action :set_conversation

    def index
        @conversations = Conversation.all
    end
    
    def show
       @messages = @conversation.messages
    end
   

    private

    def set_conversation
        @conversation = Conversation.find(params[:id])
    end

    def conversation_params
        params.require(:conversation).permit(:name, :description)
    end

   
end
