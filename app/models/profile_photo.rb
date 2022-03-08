require 'open-uri'
class ProfilePhoto < ApplicationRecord 

  validates :user_id, presence: true

  belongs_to :user,
  foreign_key: :user_id,
  class_name: 'User'

  has_one_attached :photo

  # after_save :attach_default_photo

  # def attach_default_photo
  #   if !self.photo.attached?
  #     file = URI.open('https://ourspace-fullstackproject-dev.s3.us-east-2.amazonaws.com/default_profile_pic.jpg')
  #     self.photo.attach(io: file, filename: 'default_profile_pic.png')
  #   end
  # end
end
