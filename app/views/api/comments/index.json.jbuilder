@comments.includes(:user).each do |comment|
  json.set! comment.id do
    json.extract! comment, :id, :user_id, :post_id, :body
    json.extract! comment.user, :first_name, :last_name
    json.image_url url_for(comment.user.profile_photo.photo)
  end
end
