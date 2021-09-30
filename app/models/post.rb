class Post < ApplicationRecord
  belongs_to :user,
    foreign_key: :user_id,
    source: 'User'

  has_one :poster,
    foreign_key: :poster_id,
    source: 'User'
end
