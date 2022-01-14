# json.extract! @user, :id, :email, :first_name, :last_name, :bio, :birthday, :gender, :relationship_status
# json.set! :background_photo do 
#   json.image_url url_for(@user_background_photo.photo) 
#   json.extract! @user_background_photo, :id, :user_id
# end
# json.set! :profile_photo do 
#   json.image_url url_for(@user_profile_photo.photo)
#   json.extract! @user_profile_photo, :id, :user_id
# end 