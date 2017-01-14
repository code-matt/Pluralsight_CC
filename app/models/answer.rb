class Answer < ActiveRecord::Base
  validates :user_id, :question_id, :answer, presence: true

  belongs_to :user
  belongs_to :question
end