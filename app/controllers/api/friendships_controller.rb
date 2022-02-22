class Api::FriendshipsController < ApplicationController

  before_action :underscore_params!

  def index 
    @friendships = Friendship.where(friend_id: params[:user_id])
    render :index
  end

  def create
    @friendship = Friendship.new(friendship_params)
    if @friendship.save
      render :show
    else 
      render json: ['Friendship unsuccessful :('], status: 400
    end
  end

  def destroy
    @friendship = Friendship.find_by(id: params[:id])
    # @friendship_requited = Friendship.where(user_id: @friendship.friend.id, friend_id: @friendship.user.id)
    if @friendship
          @friendship.destroy
          render json: ['Success']
    else  
      render json: ['Unable to delete friends'], status: 400
    end

  end

  private 

  def friendship_params 
    params.require(:friendship).permit(:user_id, :friend_id)
  end

end