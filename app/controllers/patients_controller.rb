class PatientsController < ApplicationController
    before_action :authorized_patient 
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    private
    def current_patient
         patient = Patient.find_by(id: session[:patient_id])
         patient
     end  
 
     def authorized_patient
         render json: {errors: "Not Authorized"}, status: :unauthorized unless current_patient
     end 
 
end
