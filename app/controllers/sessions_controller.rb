class SessionsController < ApplicationController


    def create_doctor
        reset_session
        doctor = Doctor.find_by(email: params[:email])

        if doctor&.authenticate(params[:password])
            session[:doctor_id] = doctor.id
            render json: doctor
        else
            render json: {errors: "Invalid password or email"}, status: :unauthorized
        end

    end


    def create_patient
        reset_session
        patient = Patient.find_by(email: params[:email])

        if patient&.authenticate(params[:password])
            session[:patient_id] = patient.id
            render json: patient

        else
            render json: {errors: "Invalid password or email"}, status: :unauthorized
        end

    end

   

    def destroy
        reset_session
        head :no_content
    end

















    
    # def create_admin
    #     reset_session
    #     admin = Admin.find_by(email: params[:email])

    #     if admin&.authenticate(params[:password])
    #         session[:admin_id] = admin.id
    #         # set up serializer
    #         # render json: admin, serializer: SessionPatientCreateSerializer
    #     else
    #         render json: {errors: "Invalid password or email"}, status: :unauthorized
    #     end

    # end



end
