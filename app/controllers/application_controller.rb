class ApplicationController < ActionController::API
  include ActionController::Cookies

  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found

# Change variable for patient admin and doctor
    # before_action
    before_action :authorized_patient 
    before_action :authorized_doctor
    before_action :authorized_admin
   

    # current_user and authorized_user

    # change patient to be current patient in patient controller
    # add a skip_before_action in session controller except for create and for patient, doctors, and admin
    def current_doctor 
        doctor = Doctor.find_by(id: session[:doctor_id])
        doctor
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


    def current_admin
      admin = Admin.find_by(id: session[:admin_id])
        admin
    end  

    def authorized_admin
        render json: {errors: "Not Authorized"}, status: :unauthorized unless current_admin
    end 


  private 
  def render_unprocessable_entity(invalid)
      render json: {errors: invalid.record.errors}, status: :unprocessable_entity
  end 

   def render_not_found(error)
      render json: {errors: {error.model => "Not Found"}}, status: :not_found
  end 

end
