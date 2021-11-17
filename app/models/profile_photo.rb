class ProfilePhoto < ApplicationRecord 

  validates :user_id, presence: true

  belongs_to :user,
  foreign_key: :user_id,
  class_name: 'User'

  has_one_attached :photo

end