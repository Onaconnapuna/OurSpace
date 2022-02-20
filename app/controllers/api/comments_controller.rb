class Api::CommentsController < ApplicationController
  
  before_action :underscore_params!

  def index 
    @comments = Comment.where(post_id: params[:post_id])
    render :index 
  end

  def create 
    @comment = Comment.new(comment_params)
    if @comment.save 
      render json: ['Success']
    else  
      render json: @comment.errors.full_messages, status: 422
    end
  end 

  def destroy 
    @comment = Comment.find_by(id: params[:id])
    @comment.destroy 
    render json: ['it worked']
  end

  def comment_params
    params.require(:comment).permit(:body, :user_id, :post_id, :parent_comment_id)
  end
end
