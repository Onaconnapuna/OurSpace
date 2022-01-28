class Friendship < ApplicationRecord

  validates :user_id, :friend_id, presence: true
  validates :user_id, uniqueness: { scope: :friend_id}
  validates :friend_id, uniqueness: { scope: :user_id}

  belongs_to :user,
  foreign_key: :user_id,
  class_name: 'User'

  belongs_to :friend, 
  foreign_key: :friend_id,
  class_name: 'User'

  after_save :create_requited_friendship 

  def create_requited_friendship 
    Friendship.create(user_id: self.friend_id, friend_id: self.user_id)
  end

end
