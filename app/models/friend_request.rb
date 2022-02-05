class FriendRequest < ApplicationRecord 

  validates :user_id, :friend_id, presence: true
  validates :user_id, uniqueness:  {scope: :friend_id}
  validates :friend_id, uniqueness: { scope: :user_id}

  belongs_to :user, 
  foreign_key: :user_id,
  class_name: 'User'

  belongs_to :friend,
  foreign_key: :user_id, 
  class_name: 'User'

end

