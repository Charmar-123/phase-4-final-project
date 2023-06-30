class CreatePatients < ActiveRecord::Migration[6.1]
  def change
    create_table :patients do |t|
      t.string :name
      t.string :age
      t.string :history

      t.timestamps
    end
  end
end
