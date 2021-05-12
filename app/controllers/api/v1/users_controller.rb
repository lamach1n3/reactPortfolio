class Api::V1::UsersController < ApplicationController
  def index
    user = User.all.order(created_at: :desc)
    render json: user
  end

  def create
    user = User.create!(user_params)
    if user
      render json: user
    else
      render json: user.errors
    end
  end

  def show
    if user
      render json: user
    else
      render json: user.errors
  end

  def destroy
    user&.destroy
    render json: { message: 'user deleted!' }
  end

  private

    def user_params
      params.permit(:name, :image, :phone, :email)
    end

    def user
      @user ||= User.find(params[:id])
    end
  end
end

