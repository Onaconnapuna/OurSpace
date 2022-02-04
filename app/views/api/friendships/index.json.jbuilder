@friendships.includes(:friend).each do |friendship| 
  json.set! friendship.id do 
    json.extract! friendship, :user_id, :friend_id
    json.extract! friendship.user, :first_name, :last_name
    json.image_url url_for(friendship.user.profile_photo.photo)
  end
end 