class Doctor < ApplicationRecord

    belongs_to :admin
    has_many :appointments
    has_many :patients, through: :appointments

    has_secure_password
end
