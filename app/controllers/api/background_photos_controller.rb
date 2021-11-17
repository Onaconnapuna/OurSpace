class Api::BackgroundPhotos < ApplicationController

  def create
    @background_photo = ProfilePhoto.new(background_photo_params)
    if @background_photo.save 
      render 'api/users/show'
    else  
      render json: @background_photo.errors.full_messages, status: 422
    end
  end

  def background_photo_params 
    params.require(:background_photo).permit(:user_id, :photo)
  end

end