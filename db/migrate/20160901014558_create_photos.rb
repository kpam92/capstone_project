class CreatePhotos < ActiveRecord::Migration[5.0]
  def change
    add_index :photos, :author_id
    add_index :photos, :album_id
  end
end
