class Api::ConversationsController < ApplicationController
    before_action :set_conversation

    # def index
    #     @conversations = Conversation.all
    # end

    # def show
    #     @messages = @conversation.messages
    # end

    def index
       current_user = User.find(session[:user_id])
       conversations = current_user.conversations.uniq
       render json: {
           conversations: conversations
       }
    end

    def show
        conversation = Conversation.find(params[:id])
        render json: ConversationSerializer.new(conversation).serialized_json
    end
    
    
   

    private

    def set_conversation
        @conversation = Conversation.find(params[:id])
    end

    def conversation_params
        params.permit(:name, :description)
    end

    # def conversation_params
    #     params.require(:conversation).permit(:name, :description)
    # end

   
end
