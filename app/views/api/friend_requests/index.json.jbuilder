@friend_requests.includes(:user).each do |friend_request|
  json.set! friend_request.id do 
    json.extract! friend_request, :id, :user_id, :friend_id 
    json.extract! friend_request.user, :first_name, :last_name 
    json.image_url url_for(friend_request.user.profile_photo.photo)
  end 
end 