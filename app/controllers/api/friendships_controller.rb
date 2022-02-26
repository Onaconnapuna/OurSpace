class Api::FriendshipsController < ApplicationController

  before_action :underscore_params!

  def index 
    @friendships = Friendship.where(friend_id: params[:user_id])
    @recommended_friends = Friendship.recommended_friends(params[:user_id])
    render :index
  end

  def create
    @friendship = Friendship.new(friendship_params)
    if @friendship.save
      @recommended_friends = Friendship.recommended_friends(friendship_params[:user_id])
      render :show
    else 
      render json: ['Friendship unsuccessful :('], status: 400
    end
  end

  def destroy
    @friendship = Friendship.find_by(id: params[:id])
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