class PatientsController < ApplicationController
    before_action :authorized_patient 
    
    
    
    def show
        doctor = current_patient
        render json: doctor, status: :ok
    end
    

 
end
