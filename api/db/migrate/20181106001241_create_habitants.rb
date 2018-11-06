class CreateHabitants < ActiveRecord::Migration[5.2]
  def change
    create_table :habitants do |t|
      t.string :preferred_transportation
      t.float :satisfaction
      t.integer :num_roomates
      t.string :reasons, array: true, default: []
      t.string :bad_experiences, array: true, default: []

      t.timestamps
    end
  end
end
