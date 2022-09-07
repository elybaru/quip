class Api::ConversationsController < ApplicationController
    # before_action :set_conversation
    skip_before_action :verify_authenticity_token

    def index
        @conversations = Conversation.all
        render json: @conversations,include: ['messages', 'messages.user'], status: :ok
    end

    def show
        @conversation = Conversation.find(params[:id])
        render json: @conversation, include: ['messages', 'messages.user'], status: :ok
    end

    # def index
    #    current_user = User.find(session[:user_id])
    #    conversations = current_user.conversations.uniq
    #    render json: {
    #        conversations: conversations
    #    }
    # end

    def create 
        conversation = Conversation.create!(conversation_params)
        render json: Conversation.all, status: :ok
    end

    # def show
    #     conversation = Conversation.find(params[:id])
    #     render json: conversation,
    #     # , serializer: ConversationSerializer, 
    #     include: ['messages', 'messages.user']
    #     # ConversationSerializer.new(conversation).serialized_json
    # end
    
    def destroy
        conversation = Conversation.find(params[:id])
        conversation.destroy
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
