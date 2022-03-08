class Api::LikesController < ApplicationController
  
  before_action :underscore_params!

  def create 
    @like = Like.new(like_params)
    if @like.save 
      render json: ['Success']
    else  
      render json: @like.errors.full_messages, status: 422
    end
  end 

  def destroy 
    @like = Like.find_by(id: params[:id])
    @like.destroy 
    render json: ['it worked']
  end

  def like_params
    params.require(:like).permit(:post_id, :user_id, :comment_id)
  end
end