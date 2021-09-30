class Comment < ApplicationRecord

  validates :user_id, :post_id, :body, presence: true 

  belongs_to :user,
    foreign_key: :user_id,
    class_name: 'User'

  belongs_to :post,
    foreign_key: :post_id,
    class_name: 'Post'

  has_one :parent_comment,
    class_name: 'Comment'
  
  has_many :replies.
    foreign_key: :parent_comment_id,
    class_name: 'Comment'
    
  has_many :likes 
    foreign_key: :comment_id,
    class_name: 'Like'
end
