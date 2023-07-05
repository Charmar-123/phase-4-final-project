class PatientSerializer < ActiveModel::Serializer
  attributes :id, :name, :age, :history, :email

end
