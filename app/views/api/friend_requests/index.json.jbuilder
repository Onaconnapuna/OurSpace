@friend_requests.includes(:friend).each do |friend_request|
  json.set! friend_request.id do 
    json.extract! friend_request, :id, :user_id, :friend_id 
    json.extract! friend_request.friend, :first_name, :last_name 
    json.image_url url_for(friend_request.friend.profile_photo.photo)
  end 
end 