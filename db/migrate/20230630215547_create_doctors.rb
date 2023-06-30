class CreateDoctors < ActiveRecord::Migration[6.1]
  def change
    create_table :doctors do |t|
      t.string :name
      t.string :department
      t.string :image_url

      t.timestamps
    end
  end
end
