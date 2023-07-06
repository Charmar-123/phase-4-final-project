Rails.application.routes.draw do
  
  resources :admins
  resources :appointments
  resources :patients
  resources :doctors

  # Custom routes

  post '/doctor/login', to: 'sessions#create_doctor'
  post '/patient/login', to: 'sessions#create_patient'
  delete '/logout', to: 'sessions#destroy_doctor'
  get '/authorized_doctor', to: 'doctors#show'
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
