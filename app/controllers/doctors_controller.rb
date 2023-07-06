class DoctorsController < ApplicationController

    skip_before_action :authorized_doctor, :authorized_admin, :authorized_patient, only: [:create, :index]


    
    def index 
        render json: Doctor.all, status: :ok
    end


    
    def show
        doctor = current_doctor
        render json: doctor, status: :ok
    end
end
