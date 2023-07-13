class SessionPatientCreateSerializer < ActiveModel::Serializer
  attributes :id, :name, :email
  

  has_many :appointments


end