class Api::V1::HistoryController < ApplicationController
  before_action :authenticate_user
  def index
    user = current_user
    answers = Answer.where(user_id: current_user.id)
    render json: {history: answers}
  end

  def sanitize(input)
    ActionController::Base.helpers.sanitize(input)
  end
end
