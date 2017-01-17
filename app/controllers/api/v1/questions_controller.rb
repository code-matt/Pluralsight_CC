ALLOWED_FILTERS = [
  'AdditionType',
  'SubtractionType',
  'MultiplicationType'
]

class Api::V1::QuestionsController < ApplicationController
  before_action :authenticate_user
  def index
    user = current_user
    id = sanitize(params["id"])
    existing_answer = check_for_answers(user.id, id)
    question = Question.find(id)
    render json: {
      body: question.data['body'],
      id: question.id,
      answers: (question.data['distractors'] << question.data['correct_answer']).shuffle,
      answered: existing_answer
    }
  end

  def search
    filters = params['filters'].split(',')
    results = []
    if (filters.length == 0)
      results << Question.all.order("created_at DESC")
    else
      filters.each do |filter|
        if ALLOWED_FILTERS.include?(filter)
          results << Type.find_by(name: sanitize(filter)).questions.order("created_at DESC")
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
        body: question,
        correct_answer: answer.to_i,
        distractors: distractors.map{ |n| n.to_i }
      }
    new_question = Question.create(
      data: data,
      user_id: user.id,
      type_id: 1
    )
    render json: {id: new_question.id}
  end

  def edit
    user = current_user
    question = Question.find(params['id'])
    existing_answer = check_for_answers(user.id, question.id)
    question.data['body'] = params['body']
    question.data['correct_answer'] = params['answer'].to_i
    question.save
    render json: {
      body: question.data['body'],
      id: question.id,
      answers: (question.data['distractors'] << question.data['correct_answer']).shuffle,
      answered: existing_answer
    }
  end

  def check_for_answers(user_id, question_id)
    answer = Answer.where(user_id: user_id, question_id: question_id)[0]
    if answer
      answer
    else
      false
    end
  end

  def sanitize(input)
    ActionController::Base.helpers.sanitize(input)
  end
end