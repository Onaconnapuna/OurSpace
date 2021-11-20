class BackgroundPhoto < ApplicationRecord

  validates :user_id, presence: true

  belongs_to :user,
  foreign_key: :user_id,
  class_name: 'User'

  has_one_attached :photo

  after_save :attach_default_photo

  def attach_default_photo
    file = File.open('app/assets/images/default_background_photo.png')
    self.photo.attach(io: file, filename: 'default_background_photo.png')
  end
end