class Api::V1::QuestionsController < ApplicationController
  before_action :authenticate_user, only: [:create]
  def index
    query = params["query"]
    if query.blank?
      render json: {questions: []}
    else
      questions = Favorite.where("body ILIKE ?","%#{sanitize(query)}%")
      render json: {questions: questions}
    end
  end

  def create
  end

  def sanitize(input)
    ActionController::Base.helpers.sanitize(input)
  end
end