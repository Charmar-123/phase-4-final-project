class AppointmentSerializer < ActiveModel::Serializer
  attributes :id, :date, :time, :reason_for_visit
  belongs_to :doctor
  belongs_to :patient
end
