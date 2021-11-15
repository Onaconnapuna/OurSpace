class Api::ProfilePhotos < ApplicationController

  def create
    @profile_photo = ProfilePhoto.new(profile_photo_params)
    if @profile_photo.save 
      render :show 
    else  
      render json: @profile_photo.errors.full_messages, status: 422
    end
  end

  def profile_photo_params 
    params.require(:profile_photo).permit(:user_id, :photo)
  end

end