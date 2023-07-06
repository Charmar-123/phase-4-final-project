class SessionsController < ApplicationController


    skip_before_action :authorized_doctor, :authorized_admin, :authorized_patient, only: [:create_doctor, :create_patient, :create_admin]

    def create_doctor
        reset_session
        doctor = Doctor.find_by(email: params[:email])

        if doctor&.authenticate(params[:password])
            session[:doctor_id] = doctor.id
            render json: doctor, serializer: SessionDoctorCreateSerializer
        else
            render json: {errors: "Invalid password or email"}, status: :unauthorized
        end

    end
    def create_patient
        reset_session
        patient = Patient.find_by(email: params[:email])

        if patient&.authenticate(params[:password])
            session[:patient_id] = patient.id
            byebug
            render json: patient, serializer: SessionPatientCreateSerializer
        else
            render json: {errors: "Invalid password or email"}, status: :unauthorized
        end

    end

    def create_admin
        reset_session
        admin = Admin.find_by(email: params[:email])

        if admin&.authenticate(params[:password])
            session[:admin_id] = admin.id
            # set up serializer
            # render json: admin, serializer: SessionPatientCreateSerializer
        else
            render json: {errors: "Invalid password or email"}, status: :unauthorized
        end

    end

    def destroy_doctor
        session.delete :doctor_id
        head :no_content
    end
    def destroy_patient
        session.delete :patient_id
        head :no_content
    end
    def destroy_admin
        session.delete :admin_id
        head :no_content
    end

end
