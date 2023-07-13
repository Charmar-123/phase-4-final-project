class DoctorsController < ApplicationController

    before_action :authorized_doctor, except: :index


    
    def index 
        doctors = Doctor.all
        render json: doctors, status: :ok

    end


    
    def show
        doctor = current_doctor
        render json: doctor, status: :ok
    end

    private

    def current_doctor 
        current_doctor = Doctor.find_by(id: session[:doctor_id])
        current_doctor
    end  
    def authorized_doctor
        render json: {errors: "Not Authorized"}, status: :unauthorized unless current_doctor
    end 

end
