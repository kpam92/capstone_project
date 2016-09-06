class CreateAlbums < ActiveRecord::Migration[5.0]
  def change
    create_table :albums do |t|
      t.string :title, null: false
      t.text :description
      t.integer :author_id, null: false
      t.timestamps
    end
    add_index :albums, :author_id

  end
end
