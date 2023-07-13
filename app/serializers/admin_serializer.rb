class AdminSerializer < ActiveModel::Serializer
  attributes :id, :name

  has_many :doctors
end
