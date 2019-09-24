Rails.application.routes.draw do

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  devise_for :users
  get '*path', to: 'pages#root', constraints: ->(request){ request.format.html? }
  root to: 'pages#index'
end
