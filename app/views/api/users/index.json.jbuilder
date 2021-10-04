@post.each do |post|
  json.set! post.id do
    json.extract! post, :id, :user_id, :poster_id, :body
  end
end