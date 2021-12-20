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

end
