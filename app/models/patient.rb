class Patient < ApplicationRecord
    has_many :appointments
    has_many :doctors, through: :appointments

    before_save :downcase_email

    validates :email, presence: true, format: { with: URI::MailTo::EMAIL_REGEXP, message: "Invalid email format" }
    validates :date_of_birth, presence: true, format: { with: /\A\d{4}-\d{2}-\d{2}\z/, message: "must be in the format yyyy-mm-dd" }
    validates :email, uniqueness: true

    private

    def downcase_email
    self.email = email.downcase.strip if email
    end

    has_secure_password
end
