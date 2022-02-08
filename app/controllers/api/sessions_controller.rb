class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
    if @user
      login(@user)
      @user_profile_photo = @user.profile_photo
      @user_background_photo = @user.background_photo
      @user_friends = @user.friends
      render 'api/users/show'
    else  
      render json: ['Invalid credentials'], status: 401
    end
  end
  
  def destroy 
    @user = current_user
    if @user 
      logout 
      render json: ['Log Out Successful']
    else  
      render json: ['You aren not currently signed in'], status: 404
    end
  end

end
