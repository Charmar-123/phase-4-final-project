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



  

end
