class SessionPatientCreateSerializer < ActiveModel::Serializer
  attributes :id, :name, :age, :history

  has_many :appointments
  has_many :doctors, only: [:name, :image_url, :department]
end
