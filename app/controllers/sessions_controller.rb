class SessionsController < ApplicationController

    skip_before_action :authorized_user, only: [:create]

    def create_doctor
        doctor = Doctor.find_by(email: params[:email])
        # byebug

        if doctor&.authenticate(params[:password])
            session[:doctor_id] = doctor.id
            # byebug
            render json: doctor, serializer: SessionDoctorCreateSerializer
        else
            render json: {errors: "Invalid password or email"}, status: :unauthorized
        end

    end
    def create_patient
        patient = Patient.find_by(email: params[:email])
        # byebug

        if patient&.authenticate(params[:password])
            session[:patient_id] = patient.id
            # byebug
            render json: patient, serializer: SessionPatientCreateSerializer
        else
            render json: {errors: "Invalid password or email"}, status: :unauthorized
        end

    end

    def destroy
        session.delete user_id
        head :no_content
    end
end
