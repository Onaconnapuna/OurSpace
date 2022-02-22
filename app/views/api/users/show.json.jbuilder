json.extract! @user, :id, :email, :first_name, :last_name, :bio, :birthday, :gender, :relationship_status
json.set! :background_photo do 
  json.image_url url_for(@user_background_photo.photo) 
  json.extract! @user_background_photo, :id, :user_id
end
json.set! :profile_photo do 
  json.image_url url_for(@user_profile_photo.photo)
  json.extract! @user_profile_photo, :id, :user_id
end 
json.set! :friends do 
  json.array! @user_friends, :id, :first_name, :last_name
end
json.set! :notifications do 
  @user_friend_requests.includes(:user).each do |friend_request|
    json.set! friend_request.id do 
      json.extract! friend_request, :id, :user_id, :friend_id 
      json.extract! friend_request.user, :first_name, :last_name 
      json.image_url url_for(friend_request.user.profile_photo.photo)
    end 
  end 
end
json.set! :friend_requests_sent do 
  # @user_friend_requests_sent.each do |sent_request|
    # json.set! sent_request.id do 
      # json.extract! sent_request, :id, :user_id, :friend_id 
    json.array! @user_friend_requests_sent, :id, :user_id, :friend_id
    # end 
  # end
end
