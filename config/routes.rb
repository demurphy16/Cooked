Rails.application.routes.draw do
  resources :recipes do
    resources :ingredients
  end
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  resources :users, only: :create
  get '/recipes/:recipe_id/users/:id', to: 'recipes#my_recipes'
  get '/ingredients/:ingredient_id/recipes/:id', to: 'recipes#add_ingredient'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
