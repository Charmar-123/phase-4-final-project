Rails.application.routes.draw do
  

  resources :appointments, only: [:create, :show, :update, :destroy]
  resources :patients, only: [:show, :create]
  resources :doctors, only: [:index, :show]

  # Custom routes
  post '/doctors/login', to: 'sessions#create_doctor'
  post '/patients/login', to: 'sessions#create_patient'
  delete '/logout', to: 'sessions#destroy'
  get '/authorized/doctor', to: 'doctors#show'
  get '/authorized/patient', to: 'patients#show'



  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
