class PatientsController < ApplicationController
    before_action :authorized_patient 
    
    
    
    def show
        patient = current_patient
        render json: patient, status: :ok
    end
    

 
end
