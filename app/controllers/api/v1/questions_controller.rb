ALLOWED_FILTERS = [
  'AdditionType',
  'SubtractionType',
  'MultiplicationType'
]

class Api::V1::QuestionsController < ApplicationController
  before_action :authenticate_user
  def index
    user = current_user
    random = params["random"].to_s == 'true' ? true : false
    id = sanitize(params["id"])
    existing_answer = check_for_answers(user.id, id)
    if random
      question = Question.order('RANDOM()').limit(1)[0]
      render json: {
        body: question.data['body'],
        id: question.id,
        answers: (question.data['distractors'] << question.data['correct_answer']).shuffle,
        answered: existing_answer
      }
    else
      if id != 0
        question = Question.find(id)
        render json: {
          body: question.data['body'],
          id: question.id,
          answers: (question.data['distractors'] << question.data['correct_answer']).shuffle,
          answered: existing_answer
        }
      else
        render json: {error: 'id cannot be 0'}
      end
    end
  end

  def search
    filters = params['filters'].split(',')
    results = []
    if (filters.length == 0)
      results << Question.all
    else
      filters.each do |filter|
        if ALLOWED_FILTERS.include?(filter)
          results << Type.find_by(name: sanitize(filter)).questions
        else
          next
        end
      end
    end
    render json: {results: results.flatten}
  end

  def create
    user = current_user
    question = params['question']
    answer = params['answer']
    distractors = params['distractors']
    data = 
      {
        question: question,
        answer: answer,
        distractors: distractors.map{ |n| n.to_i }
      }
    Question.create(
      data: data
    )
    render json: data
  end



  def check_for_answers(user_id, question_id)
    answer = Answer.where(user_id: user_id, question_id: question_id)[0]
    if answer
      {correct: true}
    else
      false
    end
  end

  def sanitize(input)
    ActionController::Base.helpers.sanitize(input)
  end
end