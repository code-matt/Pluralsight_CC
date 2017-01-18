ALLOWED_FILTERS = [
  'AdditionType',
  'SubtractionType',
  'MultiplicationType',
  'DivisionType'
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
          if filters.include?('MyQuestions')
            results << Type.find_by(name: sanitize(filter)).questions.where(user_id: current_user.id).order("created_at DESC")
          else
            results << Type.find_by(name: sanitize(filter)).questions.order("created_at DESC")
          end
        else
          next
        end
      end
    end
    render json: {results: results.flatten}
  end

  def create
    user = current_user
    question = "What is #{params['question']['number1']} #{params['question']['operation']} #{params['question']['number2']}"
    answer = params['answer']
    distractors = params['distractors']
    if (is_number?(answer))
      data = 
        {
          body: question,
          correct_answer: answer.to_i,
          distractors: distractors.map{ |n| n.to_i }
        }
      new_question = Question.create(
        data: data,
        user_id: user.id,
        type: Type.find(what_type?(params['question']['operation']))
      )
      render json: {id: new_question.id}
    else
      render json: {error: 'Answer must be numeric only'}
    end
  end

  def edit
    if (is_number?(params["answer"]))
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
    else
      render json: {error: 'Answer must be numeric only.'}
    end
  end

  def check_for_answers(user_id, question_id)
    answer = Answer.where(user_id: user_id, question_id: question_id)[0]
    if answer
      answer
    else
      false
    end
  end

  def what_type?(char)
    case char.to_s
      when '*'
        typeID = Type.find_by(char: '*').id
      when '+'
        typeID = Type.find_by(char: '+').id
      when '-'
        typeID = Type.find_by(char: '-').id
      when '/'
        typeID = Type.find_by(char: '/').id
    end
    typeID
  end

  def is_number?(num)
    Integer(num) rescue false
  end

  def sanitize(input)
    ActionController::Base.helpers.sanitize(input)
  end
end