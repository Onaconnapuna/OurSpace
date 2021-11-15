class BackgroundPhoto < ApplicationRecord

  validates :user_id, presence: true

  has_one_attached :photo

end