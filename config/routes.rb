Rails.application.routes.draw do
  resources :ingredients, only: 
  resources :recipes
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  resources :users, only: :create
  put '/ingredients/:ingredient_id/recipes/:id', to: 'recipes#add_ingredient'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
