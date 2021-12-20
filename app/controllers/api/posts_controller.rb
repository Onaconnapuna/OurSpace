class Api::PostsController < ApplicationController

  before_action :underscore_params! 

  def index 
    @posts = Post.where(user_id: params[:user_id])
    render :index
  end

  def create
    @post = Post.new(post_params)
    if !@post.save 
      render json: @post.errors.full_messages, status: 422
    end
  end

  def destroy
    @post = Post.find_by(id: params[:id])
    @post.destroy 
    render :show 
  end

  private 

  def post_params
    params.require(:post).permit(:body, :user_id, :poster_id, :photo)
  end

end
