class PatientsController < ApplicationController
    before_action :authorized_patient 
    
    

    def doctor_app
        render json: Doctor.all.map{|doc| {"doctor_id": doc.id, "doctor_name": doc.name, "appointments": doc.appointments.map{|app| 
            {"date": app.date,
            "time": app.time
            }
            }}}
    end
    
    def show
        patient = current_patient
        render json: patient, status: :ok
    end
    

 
end
