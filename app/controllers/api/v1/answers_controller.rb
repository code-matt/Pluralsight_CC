class Api::V1::AnswersController < ApplicationController
  before_action :authenticate_user

  def create
    user = current_user
    question_id = sanitize(params['id'].to_s).to_i
    answer = sanitize(params['answer'].to_s).to_i
    question = Question.find(question_id)
    if Answer.where(user_id: user.id, question_id: question.id)[0]
      render json: {error: 'Cant answer a question twice!'}
    else
      Answer.create(
        user_id: user.id,
        question_id: question.id,
        answer: answer,
        correct: question.data['correct_answer'] == answer
      )
      render json: {answer: {
        question: question.data,
        answer: answer,
        correct: question.data['correct_answer'] == answer,
        id: question.id
      }}
    end
  end

  def sanitize(input)
    ActionController::Base.helpers.sanitize(input)
  end
end