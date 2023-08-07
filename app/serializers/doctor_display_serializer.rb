class DoctorDisplaySerializer < ActiveModel::Serializer
  attributes :id, :name, :department, :image_url, :description
end
