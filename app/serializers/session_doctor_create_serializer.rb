class SessionDoctorCreateSerializer < ActiveModel::Serializer
  attributes :id, :name, :department, :image_url, :description

  has_many :patients
end
