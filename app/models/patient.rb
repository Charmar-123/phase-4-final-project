class Patient < ApplicationRecord
    has_many :appointments
    has_many :doctors, through: :appointment

    has_secure_password
end
