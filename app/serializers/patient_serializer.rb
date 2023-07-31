class PatientSerializer < ActiveModel::Serializer
  attributes :id, :name, :date_of_birth, :history, :email

  has_many :appointments


end
