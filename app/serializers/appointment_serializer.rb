class AppointmentSerializer < ActiveModel::Serializer
  attributes :id, :date, :time, :reason_for_visit, :doctor

 
  def doctor
      AppointmentDoctorSerializer.new(object.doctor)
  end 

end
