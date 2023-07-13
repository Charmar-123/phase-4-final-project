class AppointmentsController < ApplicationController
    # before_action :authorized_appointment
    before_action :authorized_patient, except: :index

    def index 
        render json: Appointment.all, status: :ok
    end
    def show
        # appointment = current_appointment
        appointment = Appointment.find_by(id: params[:id])
        render json: appointment, status: :ok
    end




end
