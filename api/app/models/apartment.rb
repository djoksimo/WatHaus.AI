class Apartment < ApplicationRecord
  validates :address, presence: true
  validates :latitude, presence: true
  validates :longitude, presence: true
  validates :best_trans_method, presence: true
  validates :total_cost, presence: true
end
