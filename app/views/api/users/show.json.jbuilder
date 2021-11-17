
json.set! @user.id do 
  json.extract! @user, :id, :email, :first_name, :last_name, :bio, :birthday, :gender, :relationship_status
  json.set! :user_background_photo do 
    json.url url_for(@user_background_photo)
  end
  json.set! :profile_picture do 
    json.url url_for(@user_profile_photo)
  end
end