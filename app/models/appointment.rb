class Appointment < ApplicationRecord

  validates :time, presence: true
  validates :date, presence: true
  validates :reason_for_visit, presence: true
  validates :doctor, presence: true
  validates :patient, presence: true

  validate :no_overlapping_appointments

  belongs_to :doctor
  belongs_to :patient

  def no_overlapping_appointments
    if doctor_id.present? && time.present? && date.present?
      overlapping_appointment = Appointment.where(doctor_id: doctor_id, date: date, time: time)
                                         .where.not(id: id)
                                         .first

      if overlapping_appointment.present?
        errors.add(:appointment, "The Appointment Is Not Available. Choose A Different Time.")
      end
    end
  end

end
