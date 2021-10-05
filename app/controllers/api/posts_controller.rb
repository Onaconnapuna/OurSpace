class Api::PostsController < ApplicationController

  before_action :underscore_params! 

  def index 
    @posts = Post.where(user_id: params[:user_id])
    # @posts = Post.all
    render :index
  end

  def create
    @post = Post.new(post_params)
    if @post.save 
      render :show
    else  
      render json: @post.errors.full_messages, status: 422
    end
  end

  def destroy
    @post = Post.find_by(user_id: params[:id])
    @post.destroy 
    render :show 
  end

  private 

  def post_params
    params.require(:post).permit(:body)
  end

end
