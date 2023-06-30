class AppointmentSerializer < ActiveModel::Serializer
  attributes :id, :date, :time, :reason_for_visit
  has_one :doctor
  has_one :patient
end
