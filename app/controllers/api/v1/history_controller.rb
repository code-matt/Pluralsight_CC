class Api::V1::HistoryController < ApplicationController
  before_action :authenticate_user
  def index
    user = current_user
    answers = Answer.where(user_id: current_user.id)
    history = []
    answers.each do |answer|
      history << {
        question: Question.find(answer.question_id).data,
        answer: answer.answer,
        correct: answer.correct,
        id: answer.question_id
      }
    end
    render json: {history: history}
  end

  def sanitize(input)
    ActionController::Base.helpers.sanitize(input)
  end
end
