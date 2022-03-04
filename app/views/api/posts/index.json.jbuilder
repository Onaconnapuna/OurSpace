json.set! :profile_posts do
@posts.includes(:poster, :user, :comments, :likes).each do |post|
  json.set! post.id do
    json.extract! post, :id, :user_id, :poster_id, :body, :created_at
    json.photoUrl url_for(post.photo) if post.photo.attached?
    json.set! :user do 
      json.extract! post.user, :first_name, :last_name
    end
    json.set! :poster do 
      json.extract! post.poster, :first_name, :last_name  
      json.image_url url_for(post.poster.profile_photo.photo)
    end
    json.set! :comments do 
      json.array! post.comments.includes(:user).each do |comment|
        json.extract! comment, :id, :user_id, :body, :post_id
        json.extract! comment.user, :first_name, :last_name
        json.image_url url_for(comment.user.profile_photo.photo)
        json.set! :comment_likes do 
        json.array! comment.likes.includes(:user).each do |like|
          json.extract! like, :id, :user_id
          json.extract! like.user, :first_name, :last_name
          json.image_url url_for(like.user.profile_photo.photo)
        end
      end
      end 
    end
    json.set! :likes do 
      json.array! post.likes.includes(:user).each do |like|
        json.extract! like, :id, :user_id
        json.extract! like.user, :first_name, :last_name
        json.image_url url_for(like.user.profile_photo.photo)
      end 
    end
  end

end
end

json.set! :main_posts do
  @main_posts.each do |post|
    json.set! post.id do
      json.extract! post, :id, :user_id, :poster_id, :body, :created_at
      json.photoUrl url_for(post.photo) if post.photo.attached?
      json.set! :user do 
        json.extract! post.user, :first_name, :last_name
      end
      json.set! :poster do 
        json.extract! post.poster, :first_name, :last_name  
        json.image_url url_for(post.poster.profile_photo.photo)
      end
      json.set! :comments do 
        json.array! post.comments.includes(:user).each do |comment|
          json.extract! comment, :id, :user_id, :body, :post_id
          json.extract! comment.user, :first_name, :last_name
          json.image_url url_for(comment.user.profile_photo.photo)
          json.set! :comment_likes do 
            json.array! comment.likes.includes(:user).each do |like|
              json.extract! like, :id, :user_id
              json.extract! like.user, :first_name, :last_name
              json.image_url url_for(like.user.profile_photo.photo)
            end
          end
        end 
      end
      json.set! :likes do
        json.array! post.likes.includes(:user).each do |like|
          json.extract! like, :id, :user_id
          json.extract! like.user, :first_name, :last_name
          json.image_url url_for(like.user.profile_photo.photo)
        end
      end
    end
  end
end