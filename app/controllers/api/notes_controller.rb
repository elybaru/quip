class Api::NotesController < ApplicationController
    skip_before_action :verify_authenticity_token

    def create
        @note = Board.first.notes.create!({content: params[:content], user_id: params[:user_id]})
        render json: @note, status: :ok
    end

    def update
        # note = current_user.notes.find(params[:id])
        note = Note.find(params[:id])
        note.update!(note_params)
        render json: note, status: :created
    end
    
    def destroy
        note = Note.find(params[:id])
        note.destroy
    end

    private

    def note_params
        params.permit(:content, :user_id)
    end
end
