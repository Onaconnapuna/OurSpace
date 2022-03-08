
class Post < ApplicationRecord

  validates :user_id, :poster_id, :body, presence: true
  validates :body, length: {maximum: 400}

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
    main_posts = []
    user = User.find_by(id: user_id)
    user.friends.each do |friend|
      post = friend.posts.to_a.last  
      main_posts.push(post) if post 
    end 
    if user.posts
      user_posts_today  = Post.where(user_id: user.id, created_at: Time.parse("12am")..Time.parse("11:59pm"))
      if !user_posts_today 
        main_posts.push(user.posts.to_a.last(1))
      else  
        main_posts.push(user_posts_today)
      end
    end
    return main_posts.flatten
  end

end
