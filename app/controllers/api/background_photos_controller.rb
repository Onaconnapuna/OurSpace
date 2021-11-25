class Api::BackgroundPhotosController < ApplicationController

  def create
    @background_photo = BackgroundPhoto.new(background_photo_params)
    if @background_photo.save!  
      render json: @background_photo
    else 
      render json: @background_photo.errors.full_messages, status: 422
    end
  end

  def update 
    @background_photo = BackgroundPhoto.find_by(id: params[:id])
    if @background_photo.update(background_photo_params)
      render json: @background_photo
    else 
      render ['update unsuccessful'], status: 422
    end
  end 

  def background_photo_params 
    params.require(:background_photo).permit(:user_id, :photo)
  end

end