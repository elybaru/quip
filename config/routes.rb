Rails.application.routes.draw do
  
  mount ActionCable.server => '/cable'
  
  namespace :api do
    resources :conversations
    resources :memberships
    resources :messages
    resources :users
    resources :notes
    resources :boards
    post '/login', to: 'sessions#create'
    post '/signup', to: 'users#create'
    get '/welcome', to: 'sessions#welcome'
    delete '/logout', to: 'sessions#destroy'
    get '/me', to: 'users#auth'
  end
 
 
  # get '*path',
  #   to: 'components#index',
  #   constraints: ->(req) { !req.xhr? && req.format.html? }
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  

  
  # Maybe it should be just this instead:
  # get '*path', to: 'root#index'
  root 'components#index'
  get '*path', to: 'components#index'
end
