class SessionsController < ApplicationController

    skip_before_action :authorized_doctor, only: [:create_doctor]
    skip_before_action :authorized_patient,  only: [:create_patient]

    def create_doctor
        doctor = Doctor.find_by(email: params[:email])

        if doctor&.authenticate(params[:password])
            session[:doctor_id] = doctor.id
            render json: doctor, serializer: SessionDoctorCreateSerializer
        else
            render json: {errors: "Invalid password or email"}, status: :unauthorized
        end

    end
    def create_patient
        patient = Patient.find_by(email: params[:email])

        if patient&.authenticate(params[:password])
            session[:patient] = patient.id
            render json: patient, serializer: SessionPatientCreateSerializer
        else
            render json: {errors: "Invalid password or email"}, status: :unauthorized
        end

    end
    def create_admin
        admin = Admin.find_by(email: params[:email])

        if admin&.authenticate(params[:password])
            session[:admin] = admin.id
            # set up serializer
            render json: admin, serializer: SessionPatientCreateSerializer
        else
            render json: {errors: "Invalid password or email"}, status: :unauthorized
        end

    end

    def destroy_doctor
        session.delete :doctor_id
        head :no_content
    end
    def destroy_patent
        session.delete :patient_id
        head :no_content
    end
    def destroy_admin
        session.delete :admin_id
        head :no_content
    end

end
