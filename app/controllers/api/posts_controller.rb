class Api::PostsController < ApplicationController

  def index 
    @posts = current_user.posts
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
