class Api::V1::QuestionsController < ApplicationController
  before_action :authenticate_user
  def index
    random = params["random"].to_s == 'true' ? true : false
    id = sanitize(params["id"])
    if random
      render json: {question: Question.order('RANDOM()').limit(1)[0]}
    else
      if id != 0
        render json: {question: Question.find(id)}
      else
        render json: {error: 'id cannot be 0'}
      end
    end
  end

  def sanitize(input)
    ActionController::Base.helpers.sanitize(input)
  end
end