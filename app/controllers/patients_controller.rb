class PatientsController < ApplicationController
    before_action :authorized_patient, except: [:create]
    
    

    
    def show
        patient = current_patient
        render json: patient, status: :ok
    end

    
    def create
        patient = Patient.create!(patient_params)
        render json: patient, status: :created
    end
    
    private 

    def patient_params
        params.permit(:name, :date_of_birth, :email, :password)
    end 
 
end
