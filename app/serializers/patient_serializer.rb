class PatientSerializer < ActiveModel::Serializer
  attributes :id, :name, :age, :history

end
