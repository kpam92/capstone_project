class ChangeAlbumsTableAgain < ActiveRecord::Migration[5.0]
  def change
    remove_column :albums, :cover_photo_id
  end
end
