class Api::BoardsController < ApplicationController

    def index
        @notes = Note.order(:id)
        render json: @notes
    end
end
