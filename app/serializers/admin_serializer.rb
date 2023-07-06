class AdminSerializer < ActiveModel::Serializer
  attributes :id, :name

  has_manu :doctors
end
