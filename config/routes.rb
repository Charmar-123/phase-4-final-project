Rails.application.routes.draw do
  
  resources :admins
  resources :appointments
  resources :patients
  resources :doctors

  # Custom routes

  post '/login', to: 'sessions#create_doctor'
  delete '/logout', to: 'sessions#destroy'
  get '/authorized_user', to: 'doctors#show'
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
