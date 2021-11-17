class Api::BackgroundPhotos < ApplicationController

  def create
    @background_photo = BackgroundPhoto.new(background_photo_params)
    if @background_photo.save 
      render 'api/users/show'
    else  
      render json: @background_photo.errors.full_messages, status: 422
    end
  end

  def update 
    @background_photo = BackgroundPhoto.find_by(id: params[:id])
    if @user.update(user_params)
      render :show 
    else 
      render ['update unsuccessful'], status: 422
    end
  end 

  def background_photo_params 
    params.require(:background_photo).permit(:user_id, :photo)
  end

end