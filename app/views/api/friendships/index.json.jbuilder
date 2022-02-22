@friendships.includes(:user).each do |friendship| 
  json.set! friendship.id do 
    json.extract! friendship, :id, :user_id, :friend_id
    json.extract! friendship.user, :first_name, :last_name
    json.image_url url_for(friendship.user.profile_photo.photo)
  end
end 