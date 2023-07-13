class AppointmentsController < ApplicationController
    # before_action :authorized_appointment
    before_action :authorized_patient

    def index 
        render json: Appointment.all, status: :ok
    end

    def create
        appointment = Appointment.create!(appointment_params)
        render json: appointment, status: :created
    end


    def show
        # appointment = current_appointment
        appointment = Appointment.find_by(id: params[:id])
        render json: appointment, status: :ok
    end

private 

    def appointment_params
        params.permit(:date, :time,: :reason_for_visit, :doctor_id, :patient_id)
    end

end
