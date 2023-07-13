class PatientsController < ApplicationController
    before_action :authorized_patient 
    
    
    
    def show
        doctor = current_patient
        render json: doctor, status: :ok
    end
    
    
    private
    def current_patient
         patient = Patient.find_by(id: session[:patient_id])
         patient
     end  
 
     def authorized_patient
         render json: {errors: "Not Authorized"}, status: :unauthorized unless current_patient
     end 
 
end
