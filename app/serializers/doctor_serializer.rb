class DoctorSerializer < ActiveModel::Serializer
  attributes :id, :name, :department, :image_url, :description

  has_many :patients

  # attribute :patients
end
