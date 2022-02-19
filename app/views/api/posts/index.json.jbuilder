@posts.includes(:poster, :comments).each do |post|
  json.set! post.id do
    json.extract! post, :id, :user_id, :poster_id, :body
    json.photoUrl url_for(post.photo) if post.photo.attached?
    json.set! :poster do 
      json.extract! post.poster, :first_name, :last_name  
      json.image_url url_for(post.poster.profile_photo.photo)
    end
    json.set! :comments do 
      json.array! post.comments.includes(:user).each do |comment|
        json.extract! comment, :id, :user_id, :body
        json.image_url url_for(comment.user.profile_photo.photo)
      end 
    end
  end
end