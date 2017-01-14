class Question < ActiveRecord::Base
  validates :body, :data, :user_id, presence: true
  
  has_many :answers
end