class SessionPatientCreateSerializer < ActiveModel::Serializer
  attributes :id, :reason_for_visit
  

  belongs_to :doctor

  # def appointments
  #   byebug
  #   object.appointments
  # end

  # has_many :doctors
  # has_many :appointments
end