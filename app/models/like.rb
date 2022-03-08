class Like < ApplicationRecord

  validates :user_id, presence: true
  validates :post_id, :comment_id,  presence: true, allow_blank: true
  validates :post_id, uniqueness: {scope: :user_id}
  # validates :comment_id, uniqueness: {scope: :user_id}

  belongs_to :user,
    foreign_key: :user_id,
    class_name: 'User'

  belongs_to :post, optional: true,
    foreign_key: :post_id,
    class_name: 'Post'

  belongs_to :comment, optional: true,
    foreign_key: :comment_id,
    class_name: 'Comment'

end
