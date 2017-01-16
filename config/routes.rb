Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api do
    namespace :v1 do
      mount Knock::Engine => "/knock"
      resources :questions, only: [:create, :index]
      resources :answers, only: [:create]
      get '/history', to: 'history#index'
      get '/search', to: 'questions#search'
    end
  end

  get "/*path" => redirect("/?goto=%{path}")
end
