class Api::FriendRequestsController < ApplicationController

  before_action :underscore_params!

  def index 
    @user = User.find_by(id: params[:user_id])
    @user_profile_photo = @user.profile_photo
    @user_background_photo = @user.background_photo
    @user_friends = @user.friends
    @user_friend_requests = @user.friend_requests
    @user_friend_requests_sent = @user.friend_requests_sent
    @friend_requests = FriendRequest.where(friend_id: params[:user_id])
    render :index
  end

  def create 
    @friend_request = FriendRequest.new(friend_request_params)
    if @friend_request.save 
      render json: ['Friend Request successful']
    else  
      render json: ['Friend Request unsuccessful'], status: 400 
    end
  end

  def destroy 
    @friend_request = FriendRequest.find_by(id: params[:id])
    @friend_request.destroy
  end

  private 

  def friend_request_params 
    params.require(:friend_request).permit(:user_id, :friend_id)
  end

end