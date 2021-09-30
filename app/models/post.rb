class Post < ApplicationRecord
  belongs_to :user,
    foreign_key: :user_id,
    class_name: 'User'

  has_one :poster,
    foreign_key: :poster_id,
    class_name: 'User'
end
