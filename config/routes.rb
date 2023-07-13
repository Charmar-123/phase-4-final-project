Rails.application.routes.draw do
  
  resources :admins
  resources :appointments
  resources :patients
  resources :doctors

  # Custom routes
  get '/doctors', to: 'doctors#index'
  post '/doctors/login', to: 'sessions#create_doctor'
  post '/patients/login', to: 'sessions#create_patient'
  delete '/logout', to: 'sessions#destroy'
  get '/authorized/doctor', to: 'doctors#show'
  get '/authorized/patient', to: 'patients#show'
  get '/authorized/admin', to: 'doctors#show'
  get '/authorized/appointment', to: 'appointments#show'
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
