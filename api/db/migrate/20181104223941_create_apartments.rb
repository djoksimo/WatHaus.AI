class CreateApartments < ActiveRecord::Migration[5.2]
  def change
    create_table :apartments do |t|
      t.string :address
      t.float :latitude
      t.float :longitude
      t.string :best_trans_method
      t.integer :total_cost
      t.text :indoor_features, array: true, default: []
      t.text :nearby_features, array: true, default: []

      t.timestamps
    end
  end
end
