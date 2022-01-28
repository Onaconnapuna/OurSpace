class User < ApplicationRecord

  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP}
  validates :first_name, :last_name, :session_token, :password_digest, presence: true
  validates :email, :session_token, uniqueness: true
  validates :password, length: { minimum: 8 }, allow_nil: true

  has_one :profile_photo,
    foreign_key: :user_id,
    class_name: 'ProfilePhoto'
 
  has_one :background_photo,
    foreign_key: :user_id,
    class_name: 'BackgroundPhoto'

  has_many :posts, 
    foreign_key: :user_id,
    class_name: 'Post'

  has_many :posts_made,
    foreign_key: :poster_id,
    class_name: 'Post'

  has_many :friendships, 
    foreign_key: :user_id,
    class_name: 'Friendship'

  has_many :friends, 
    through: :friendships, 
    source: :friend

  has_many :comments,
    foreign_key: :user_id,
    class_name: 'Comment'

  has_many :likes,
    foreign_key: :user_id,
    class_name: 'Like'
  
  attr_reader :password

  after_initialize :ensure_session_token
  after_save :add_default_photos

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    if user && user.is_password?(password) 
      user 
    else  
      nil 
    end
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    password_object = BCrypt::Password.new(self.password_digest)
    password_object.is_password?(password)
  end

  def reset_session_token! 
    self.session_token = SecureRandom::urlsafe_base64
    self.save! 
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= SecureRandom::urlsafe_base64
  end

  def add_default_photos
    self.profile_photo ||= ProfilePhoto.create(user_id: self.id) 
    self.background_photo ||= BackgroundPhoto.create(user_id: self.id) 
  end
  
end

