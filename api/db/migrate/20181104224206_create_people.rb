class CreatePeople < ActiveRecord::Migration[5.2]
  def change
    create_table :people do |t|
      t.string :preferred_transportation
      t.float :satisfaction
      t.integer :num_roomates
      t.string :reason
      t.text :bad_experiences, array: true, default: []
      t.references :apartment, foreign_key: true

      t.timestamps
    end
  end
end
