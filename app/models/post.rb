require 'byebug'
class Post < ApplicationRecord

  validates :user_id, :poster_id, :body, presence: true

  has_one_attached :photo

  belongs_to :user,
    foreign_key: :user_id,
    class_name: 'User'

  belongs_to :poster,
    foreign_key: :poster_id,
    class_name: 'User'

  has_many :comments,
    foreign_key: :post_id,
    class_name: 'Comment'

  has_many :likes,
    foreign_key: :post_id,
    class_name: 'Like'

  def self.main_posts(user_id)
    # debugger
    main_posts = []
    user = User.find_by(id: user_id)
    if user.posts
      main_posts.push(user.posts.to_a.last(1))
    end
    user.friends.each do |friend|
      post = friend.posts.to_a.last  
      main_posts.push(post) if post 
    end 
    # posts = Posts.where(id: main_posts.map(&:id)) 
    return main_posts
  end

end
