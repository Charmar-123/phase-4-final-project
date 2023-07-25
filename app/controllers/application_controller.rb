class ApplicationController < ActionController::API
  include ActionController::Cookies

  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found


  private 
 
  def current_doctor 
    current_doctor = Doctor.find_by(id: session[:doctor_id])
    current_doctor
  end  
  def authorized_doctor
    render json: {errors: "Not Authorized"}, status: :unauthorized unless current_doctor
  end 
    
  def current_patient 
         patient = Patient.find_by(id: session[:patient_id])
         patient
  end  
 
  def authorized_patient
         render json: {errors: "Not Authorized"}, status: :unauthorized unless current_patient
  end 
  def render_unprocessable_entity(invalid)
      render json: {errors: invalid.record.errors}, status: :unprocessable_entity
  end 

   def render_not_found(error)
      render json: {errors: {error.model => "Not Found"}}, status: :not_found
  end 









  def current_admin
    admin = Admin.find_by(id: session[:admin_id])
      admin
  end  

  def authorized_admin
      render json: {errors: "Not Authorized"}, status: :unauthorized unless current_admin
  end 

end
