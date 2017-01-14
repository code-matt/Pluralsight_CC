class User < ActiveRecord::Base
  has_secure_password

  validates :email, :password, presence: true, if: :should_validate?
  validates :password, length: { minimum: 7 }, if: :should_validate?
  validates :email, uniqueness: true

  has_many :questions
  has_many :answers
end

def should_validate?
  new_record?
end