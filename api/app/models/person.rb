class Person < ApplicationRecord
  validates :preferred_transportation, presence: true
  validates :satisfaction, presence: true
  validates :num_roomates, presence: true
  validates :reasons, presence: true
  validates :bad_experiences, presence: true
  validates :apartment, presence: true
end
