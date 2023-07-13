class PatientSerializer < ActiveModel::Serializer
  attributes :id, :name, :age, :history, :email

  has_many :appointments


end
