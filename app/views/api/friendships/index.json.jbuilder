json.set! :friendships do
  @friendships.includes(:user).each do |friendship| 
    json.set! friendship.id do 
      json.extract! friendship, :id, :user_id, :friend_id
      json.extract! friendship.user, :first_name, :last_name
      json.image_url url_for(friendship.user.profile_photo.photo)
    end
  end 
end

json.set! :recommended_friends do
  @recommended_friends.each do |friend| 
    json.set! friend.id do 
      json.extract! friend, :id, :first_name, :last_name
      json.set! :user_id, friend.id
      json.image_url url_for(friend.profile_photo.photo)
    end
  end 
end
