class Api::UsersController < ApplicationController
    before_action :set_user, only: [:update, :destroy]

    skip_before_action :authorize, only: [:create]
    skip_before_action :verify_authenticity_token

    def create
        user = User.create(user_params)
        if user.valid?
            session[:user_id] = user.id
            render json: user, status: :created
        else
          
          render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
          
        end
    end

    def auth
        user = User.find(session[:user_id])
        render json: user
    end


     # DELETE /users/1
    def destroy
        @user.destroy
        session.delete :user_id
    end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def user_params
      params.require(:user).permit(:username, :password)
    end
end
