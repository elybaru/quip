Rails.application.routes.draw do
  resources :conversations
  resources :memberships
  resources :messages
  resources :users
  root 'components#index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
