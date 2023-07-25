class AppointmentSerializer < ActiveModel::Serializer
  attributes :id, :date, :time, :reason_for_visit, :doctor_name, :doctor_department

 
  def doctor_name
      object.doctor.name
  end 

  def doctor_department
    object.doctor.department
  end

end
