class Question < ActiveRecord::Base
  validates :data, :user_id, presence: true
  
  has_many :answers
  belongs_to :type
end