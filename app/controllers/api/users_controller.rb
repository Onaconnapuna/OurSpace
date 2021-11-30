class Api::UsersController < ApplicationController

  before_action :underscore_params! 

  def index 
    @posts = Post.where(user_id: params[:id])
    render :index
  end 

  def create 
    @user = User.new(user_params) 
    if @user.save
      login(@user)
      render :show
    else 
      render json: @user.errors.full_messages, status: 422 
    end
  end

  def update 
    @user = User.find_by(id: params[:id])
    if @user.update(user_params)
      @user_posts = @user.posts
      @user_background_photo = @user.background_photo 
      @user_profile_photo = @user.profile_photo
      render :show 
    else  
      render ['update unsuccessful'], status: 422
    end
  end

  def show 
    @user = User.find_by(id: params[:id])
    @user_posts = @user.posts
    @user_background_photo = @user.background_photo 
    @user_profile_photo = @user.profile_photo
    if @user 
      render :show 
    else  
      render ['could not find user'], status: 404
    end 
  end 

  private 

  def user_params
    params.require(:user).permit(:email, :password, :first_name, :last_name, :bio, :birthday, :gender, :relationship_status)
  end
end
